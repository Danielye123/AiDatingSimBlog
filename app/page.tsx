// import { AnimatedBackground } from "@/components/animated-background"
// import { BlogCard } from "@/components/blog-card"
// import { blogPosts } from "@/lib/data"

// export default function Home() {
//   return (
//     <>
//     {/* <main className="mx-[120px] px-4 py-8">
//       <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#2B2D42] dark:text-white drop-shadow-[0_0_5px_#ff99cc] [text-shadow:0_0_5px_#f472b6,0_0_10px_#c084fc,0_0_5px_#6366f1] transition-colors duration-300">
//         Anime Blog
//       </h1> */}
//        <AnimatedBackground />
//       <main className="container mx-auto px-4 py-8 relative z-0">
//         <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#2B2D42] dark:text-white transition-colors duration-300">
//           <span className="relative inline-block">
//             Anime Blog
//             <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400" />
//           </span>
//         </h1>


//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-[20px]">
//         {blogPosts.map((post) => (
//           <BlogCard key={post.id} post={post} />
//         ))}
//       </div>
//     </main>
//     </>
//   )
// }


import { BlogCard } from "@/components/blog-card"
import { blogPosts } from "@/lib/data"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <main className="container mx-auto px-4 py-8 relative z-0">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#2B2D42] dark:text-white transition-colors duration-300">
          <span className="relative inline-block">
            Anime Blog
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400" />
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </>
  )
}
