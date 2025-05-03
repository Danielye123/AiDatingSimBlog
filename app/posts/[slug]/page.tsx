/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { blogPosts } from "@/lib/data"

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Find related posts (posts with at least one matching tag)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.tags.some((tag) => post.tags.includes(tag)))
    .slice(0, 3)

  return (
    <main className="mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden mb-6">
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="text-center mb-8 flex justify-center items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2B2D42] mb-4">{post.title}</h1>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tags#${tag.replace(/\s+/g, "-").toLowerCase()}`}
                  className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-[#F5C1CC]/20 text-[#2B2D42] border border-[#F5C1CC]/30 hover:bg-[#F5C1CC]/30 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
            <div className="flex items-center justify-center gap-2 text-[#2B2D42]/70">
              <div className="relative w-8 h-8 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=32&width=32" alt="Author" fill className="object-cover" />
              </div>
              <span className="text-sm">By Yuki</span>
              <span className="text-sm">•</span>
              <time className="text-sm">{post.date}</time>
            </div>
          </div>
        </div>

        {/* Post Content */}
        <div className="bg-white rounded-xl border border-[#F5C1CC]/30 overflow-hidden shadow-md p-6 md:p-8 mb-8">
          <div className="prose prose-lg max-w-none text-[#1E1E1E]">
            <p className="lead text-xl mb-6">{post.summary}</p>

            <p>
              Anime has always been a medium that pushes boundaries and explores complex themes. In {post.title}, we see
              this tradition continued with remarkable artistry and narrative depth. The series takes viewers on a
              journey through beautifully rendered landscapes and emotionally resonant character arcs.
            </p>

            <h2>Visual Storytelling</h2>
            <p>
              The animation quality stands out immediately. Each frame is meticulously crafted, with attention to detail
              that rewards repeated viewing. The character designs strike a perfect balance between stylization and
              expressiveness, allowing for subtle emotional cues that enhance the storytelling.
            </p>

            <p>
              Color plays a crucial role in the visual language of the series. The palette shifts deliberately to
              reflect the emotional tenor of each scene, from vibrant, saturated hues during moments of joy to muted,
              cooler tones during introspective sequences.
            </p>

            <div className="my-8 grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Scene from anime"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Character design"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2>Thematic Depth</h2>
            <p>
              Beyond its visual appeal, the series explores themes of identity, belonging, and the tension between
              tradition and progress. These universal concerns are grounded in specific cultural contexts that add
              richness and authenticity to the narrative.
            </p>

            <p>
              The protagonist's journey serves as a microcosm for broader societal questions. As they navigate
              challenges and form relationships, we see reflected the complexities of modern life and the enduring human
              need for connection and purpose.
            </p>

            <blockquote>
              "Animation is not just for children. It's a medium that can express deep emotions and complex ideas in
              ways that live-action sometimes cannot."
            </blockquote>

            <h2>Sound Design and Music</h2>
            <p>
              The soundtrack deserves special mention. Composer Takahashi Hiroki has created a score that enhances every
              scene without overwhelming it. The opening theme, "Eternal Horizon," has become an instant classic among
              fans, while the incidental music provides emotional texture throughout.
            </p>

            <p>
              Voice acting across both the original Japanese and English dub is exceptional, with performances that
              capture the nuance of each character's personality and growth throughout the series.
            </p>

            <h2>Conclusion</h2>
            <p>
              In summary, this series represents some of the finest work in contemporary anime. It balances spectacular
              visuals with thoughtful storytelling, creating an experience that resonates long after the final episode.
              Whether you're a longtime anime enthusiast or new to the medium, this series offers something of value and
              stands as a testament to the artistic potential of animation.
            </p>
          </div>
        </div>

        {/* Social Sharing */}
        <div className="bg-white rounded-xl border border-[#F5C1CC]/30 overflow-hidden shadow-md p-6 mb-8">
          <h3 className="text-lg font-bold text-[#2B2D42] mb-4">Share this post</h3>
          <div className="flex gap-4">
            <button className="p-2 rounded-full bg-[#F5C1CC]/10 text-[#2B2D42] hover:bg-[#F5C1CC]/30 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </button>
            <button className="p-2 rounded-full bg-[#F5C1CC]/10 text-[#2B2D42] hover:bg-[#F5C1CC]/30 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </button>
            <button className="p-2 rounded-full bg-[#F5C1CC]/10 text-[#2B2D42] hover:bg-[#F5C1CC]/30 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-link"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </button>
            <button className="p-2 rounded-full bg-[#F5C1CC]/10 text-[#2B2D42] hover:bg-[#F5C1CC]/30 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Author Bio */}
        <div className="bg-white rounded-xl border border-[#F5C1CC]/30 overflow-hidden shadow-md p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
              <Image src="/placeholder.svg?height=80&width=80" alt="Author" fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B2D42]">Yuki</h3>
              <p className="text-[#1E1E1E]/80 mb-2">
                Anime enthusiast and critic with a passion for storytelling and visual arts. Yuki has been writing about
                anime for over 5 years and has a particular interest in how animation can express complex emotions and
                ideas.
              </p>
              <Link href="/bio" className="text-sm font-medium text-[#F5C1CC] hover:text-[#2B2D42] transition-colors">
                Read more about Yuki →
              </Link>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-6">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/posts/${relatedPost.slug}`}
                  className="bg-white rounded-xl border border-[#F5C1CC]/30 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 block h-full"
                >
                  <div className="relative h-40 w-full">
                    <Image
                      src={relatedPost.coverImage || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-[#2B2D42] hover:text-[#F5C1CC] transition-colors mb-2">
                      {relatedPost.title}
                    </h3>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {relatedPost.tags.slice(0, 2).map((tag) => (
                        <span
                          key={`${relatedPost.id}-${tag}`}
                          className="inline-block px-2 py-0.5 text-xs rounded-full bg-[#F5C1CC]/20 text-[#2B2D42]"
                        >
                          {tag}
                        </span>
                      ))}
                      {relatedPost.tags.length > 2 && (
                        <span className="inline-block px-2 py-0.5 text-xs rounded-full bg-[#F5C1CC]/10 text-[#2B2D42]/70">
                          +{relatedPost.tags.length - 2}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[#1E1E1E]/80 line-clamp-2">{relatedPost.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Comments Section */}
        <div className="bg-white rounded-xl border border-[#F5C1CC]/30 overflow-hidden shadow-md p-6">
          <h2 className="text-2xl font-bold text-[#2B2D42] mb-6">Comments</h2>

          {/* Comment Form */}
          <form className="mb-8">
            <div className="mb-4">
              <label htmlFor="comment" className="block text-sm font-medium text-[#2B2D42] mb-1">
                Leave a comment
              </label>
              <textarea
                id="comment"
                rows={4}
                className="w-full px-3 py-2 border border-[#F5C1CC]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F5C1CC] focus:border-transparent"
                placeholder="Share your thoughts..."
              ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#2B2D42] mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-[#F5C1CC]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F5C1CC] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#2B2D42] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-[#F5C1CC]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F5C1CC] focus:border-transparent"
                />
              </div>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-[#F5C1CC] text-[#2B2D42] font-medium rounded-lg hover:bg-[#2B2D42] hover:text-white transition-colors"
            >
              Post Comment
            </button>
          </form>

          {/* Sample Comments */}
          <div className="space-y-6">
            <div className="border-t border-[#F5C1CC]/20 pt-6">
              <div className="flex items-start gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Commenter" fill className="object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-[#2B2D42]">Akira</h4>
                    <span className="text-xs text-[#2B2D42]/70">2 days ago</span>
                  </div>
                  <p className="text-[#1E1E1E]/80">
                    Great analysis! I especially loved your points about the visual storytelling. The use of color in
                    this series is truly remarkable and adds so much depth to the narrative.
                  </p>
                  <button className="mt-2 text-sm text-[#F5C1CC] hover:text-[#2B2D42] transition-colors">Reply</button>
                </div>
              </div>
            </div>

            <div className="border-t border-[#F5C1CC]/20 pt-6">
              <div className="flex items-start gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Commenter" fill className="object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-[#2B2D42]">Miyuki</h4>
                    <span className="text-xs text-[#2B2D42]/70">1 week ago</span>
                  </div>
                  <p className="text-[#1E1E1E]/80">
                    I've been on the fence about watching this series, but your review convinced me to give it a try.
                    The themes you mentioned are exactly what I look for in anime.
                  </p>
                  <button className="mt-2 text-sm text-[#F5C1CC] hover:text-[#2B2D42] transition-colors">Reply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Post Navigation */}
      <div className="max-w-4xl mx-auto mt-8 flex justify-between">
        <Link
          href="/"
          className="px-4 py-2 bg-[#F5C1CC]/10 text-[#2B2D42] rounded-lg hover:bg-[#F5C1CC]/30 transition-colors flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-left"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Previous Post
        </Link>
        <Link
          href="/"
          className="px-4 py-2 bg-[#F5C1CC]/10 text-[#2B2D42] rounded-lg hover:bg-[#F5C1CC]/30 transition-colors flex items-center gap-2"
        >
          Next Post
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Link>
      </div>
    </main>
  )
}
