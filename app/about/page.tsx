import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-xl border border-[#F5C1CC]/30 overflow-hidden shadow-md">
        <div className="relative h-64 md:h-80 w-full">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="About Banner"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-8">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#F5C1CC] shadow-md flex-shrink-0">
              <Image src="/placeholder.svg?height=128&width=128" alt="Author Avatar" fill className="object-cover" />
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-[#2B2D42] mb-2">Sakura Anime Blog</h1>
              <p className="text-lg text-[#2B2D42]/80 italic">Exploring the world of anime one post at a time</p>
              <div className="flex gap-4 mt-4 justify-center md:justify-start">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2B2D42] hover:text-[#F5C1CC] transition-colors"
                >
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
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2B2D42] hover:text-[#F5C1CC] transition-colors"
                >
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
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a href="mailto:hello@animeblog.com" className="text-[#2B2D42] hover:text-[#F5C1CC] transition-colors">
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
                    className="lucide lucide-mail"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-[#1E1E1E]">
            <h2 className="text-2xl font-bold text-[#2B2D42] border-b border-[#F5C1CC]/30 pb-2">About Me</h2>
            <p>
              Hello! I'm Yuki, a passionate anime enthusiast and the creator of Sakura Anime Blog. I started this blog
              in 2020 as a way to share my thoughts and analyses on various anime series, manga adaptations, and the
              broader Japanese animation industry.
            </p>

            <p>
              With over 10 years of experience watching anime (yes, I've been hooked since I was a kid!), I've developed
              a deep appreciation for the art form and its cultural significance. My favorite genres include slice of
              life, psychological thrillers, and classic shonen, but I'm always open to exploring new styles and
              stories.
            </p>

            <h2 className="text-2xl font-bold text-[#2B2D42] border-b border-[#F5C1CC]/30 pb-2 pt-4">Blog Mission</h2>
            <p>
              Sakura Anime Blog aims to provide thoughtful, in-depth analyses of anime series both new and old. I
              believe that anime is not just entertainment but a rich art form worthy of serious critical attention.
              Through my writing, I hope to:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Highlight underappreciated anime gems that deserve more attention</li>
              <li>Analyze themes, character development, and storytelling techniques in popular series</li>
              <li>Connect anime to broader cultural and artistic contexts</li>
              <li>Create a welcoming community for anime fans of all experience levels</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#2B2D42] border-b border-[#F5C1CC]/30 pb-2 pt-4">Contact</h2>
            <p>
              Have a suggestion for a series I should review? Want to collaborate or just chat about anime? Feel free to
              reach out via{" "}
              <a href="mailto:hello@animeblog.com" className="text-[#F5C1CC] hover:text-[#2B2D42] transition-colors">
                email
              </a>{" "}
              or connect with me on social media.
            </p>

            <div className="pt-4">
              <Link
                href="/"
                className="inline-block px-6 py-3 bg-[#F5C1CC] text-[#2B2D42] font-medium rounded-lg hover:bg-[#2B2D42] hover:text-white transition-colors"
              >
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
