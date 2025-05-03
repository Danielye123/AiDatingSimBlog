import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#F5C1CC] mb-4">404</h1>
        <h2 className="text-2xl font-bold text-[#2B2D42] mb-4">Page Not Found</h2>
        <p className="text-[#1E1E1E]/80 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for seems to have disappeared into another dimension.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-[#F5C1CC] text-[#2B2D42] font-medium rounded-lg hover:bg-[#2B2D42] hover:text-white transition-colors"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  )
}
