import { navLinks } from "@/config"
import Link from "next/link"

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header className="border-b-2 border-black h-[150px] hero-pattern w-full flex flex-col justify-end items-center gap-5 pb-5">
        <h1 className="bg-gradient-to-r from-slate-300 via-slate-200 to-slate-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          Solitaire
        </h1>
      </header>

      <div className="flex gap-4 h-12 bg-neutral-100 border-b-[1px] border-neutral-200 justify-center">
        {navLinks.map(({ label, url }) => (
          <Link
            className="inline-flex items-center justify-center px-4 hover:bg-neutral-200 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            key={label}
            href={url}
          >
            {label}
          </Link>
        ))}
      </div>

      {children}
    </>
  )
}
