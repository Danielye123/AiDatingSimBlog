import Link from "next/link"
import { blogPosts } from "@/lib/data"

export default function TagsPage() {
  // Extract all unique tags and count posts for each tag
  const tagCounts: Record<string, number> = {}
  const tagPosts: Record<string, typeof blogPosts> = {}

  blogPosts.forEach((post) => {
    post.tags.forEach((tag) => {
      if (!tagCounts[tag]) {
        tagCounts[tag] = 0
        tagPosts[tag] = []
      }
      tagCounts[tag]++
      tagPosts[tag].push(post)
    })
  })

  // Sort tags alphabetically
  const sortedTags = Object.keys(tagCounts).sort()

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#2B2D42]">Browse by Tags</h1>

      <div className="bg-white rounded-xl border border-[#F5C1CC]/30 overflow-hidden shadow-md p-6 md:p-8 mb-8">
        <h2 className="text-xl font-bold text-[#2B2D42] mb-4">All Tags</h2>
        <div className="flex flex-wrap gap-2">
          {sortedTags.map((tag) => (
            <a
              key={tag}
              href={`#${tag.replace(/\s+/g, "-").toLowerCase()}`}
              className="px-4 py-2 bg-[#F5C1CC]/10 hover:bg-[#F5C1CC]/30 text-[#2B2D42] rounded-full border border-[#F5C1CC]/30 transition-colors"
            >
              {tag} <span className="text-sm text-[#2B2D42]/70">({tagCounts[tag]})</span>
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        {sortedTags.map((tag) => (
          <section key={tag} id={tag.replace(/\s+/g, "-").toLowerCase()} className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-bold text-[#2B2D42]">{tag}</h2>
              <div className="px-3 py-1 bg-[#F5C1CC]/20 text-[#2B2D42] rounded-full text-sm">
                {tagCounts[tag]} {tagCounts[tag] === 1 ? "post" : "posts"}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tagPosts[tag].map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl border border-[#F5C1CC]/30 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex"
                >
                  <div className="relative w-24 h-auto bg-[#F5C1CC]/10">
                    <div className="absolute inset-0 flex items-center justify-center text-[#F5C1CC]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-file-text"
                      >
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" x2="8" y1="13" y2="13" />
                        <line x1="16" x2="8" y1="17" y2="17" />
                        <line x1="10" x2="8" y1="9" y2="9" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-4 flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <Link href={`/posts/${post.slug}`}>
                        <h3 className="font-bold text-[#2B2D42] hover:text-[#F5C1CC] transition-colors">
                          {post.title}
                        </h3>
                      </Link>
                      <time className="text-xs text-[#2B2D42]/70 whitespace-nowrap ml-2">{post.date}</time>
                    </div>
                    <p className="text-sm text-[#1E1E1E]/80 line-clamp-2">{post.summary}</p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {post.tags.map((postTag) => (
                        <span
                          key={`${post.id}-${postTag}`}
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            postTag === tag
                              ? "bg-[#F5C1CC]/40 text-[#2B2D42] font-medium"
                              : "bg-[#F5C1CC]/10 text-[#2B2D42]/70"
                          }`}
                        >
                          {postTag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-[#F5C1CC] text-[#2B2D42] font-medium rounded-lg hover:bg-[#2B2D42] hover:text-white transition-colors"
        >
          Back to Blog
        </Link>
      </div>
    </main>
  )
}
