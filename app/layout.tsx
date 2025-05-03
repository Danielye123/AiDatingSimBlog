// import type React from "react"
// import type { Metadata } from "next"
// import { Quicksand } from "next/font/google"
// import "./globals.css"
// import { Navbar } from "@/components/navbar"
// import { ThemeProvider } from "@/components/theme-provider"

// // Initialize the Quicksand font
// const quicksand = Quicksand({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   variable: "--font-quicksand",
// })

// export const metadata: Metadata = {
//   title: "Anime Blog",
//   description: "A blog about anime and manga",
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body
//         className={`bg-[#FFF8F0] dark:bg-[#0f0c29] text-[#1E1E1E] dark:text-white transition-colors duration-300 ${quicksand.variable} font-quicksand`}
//       >
//         <ThemeProvider>
//           <Navbar />
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }


import type React from "react"
import type { Metadata } from "next"
import { Quicksand } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"

// Initialize the Quicksand font
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
})

export const metadata: Metadata = {
  title: "Anime Blog",
  description: "A blog about anime and manga",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`text-[#1E1E1E] dark:text-white transition-colors duration-300 ${quicksand.variable} font-quicksand min-h-screen`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
