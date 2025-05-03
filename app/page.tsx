import { BlogCard } from "@/components/blog-card"
import { blogPosts } from "@/lib/data"

export default function Home() {
  return (
    <main className="mx-[120px] px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#2B2D42] dark:text-white drop-shadow-[0_0_5px_#ff99cc] [text-shadow:0_0_5px_#f472b6,0_0_5px_#c084fc,0_0_5px_#6366f1] transition-colors duration-300">
        AI Dating Sim Updates
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-[20px]">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  )
}
