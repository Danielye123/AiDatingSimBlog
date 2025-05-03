import Image from "next/image"
import Link from "next/link"
import type { Post } from "@/lib/types"

export function BlogCard({ post }: { post: Post }) {
  return (
    <article className="bg-white dark:bg-[#1f1b3a] rounded-xl border border-[#F5C1CC]/30 dark:border-[#2e2b4f] overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48 w-full">
        <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-[#F5C1CC]/20 dark:bg-pink-400/20 text-[#2B2D42] dark:text-pink-200 border border-[#F5C1CC]/30 dark:border-pink-400/30 transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <time className="text-xs text-[#2B2D42]/70 dark:text-gray-400 transition-colors duration-300">
            {post.date}
          </time>
        </div>

        <Link href={`/posts/${post.slug}`}>
          <h2 className="text-xl font-bold text-[#2B2D42] dark:text-white hover:text-[#F5C1CC] dark:hover:text-pink-400 transition-colors duration-300">
            {post.title}
          </h2>
        </Link>

        <p className="text-sm text-[#1E1E1E]/80 dark:text-gray-300 line-clamp-3 transition-colors duration-300">
          {post.summary}
        </p>

        <Link
          href={`/posts/${post.slug}`}
          className="inline-block text-sm font-medium text-[#F5C1CC] dark:text-pink-400 hover:text-[#2B2D42] dark:hover:text-white transition-colors duration-300"
        >
          Read more →
        </Link>
      </div>
    </article>
  )
}
