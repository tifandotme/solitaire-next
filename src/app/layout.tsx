import { fonts } from "@/lib/fonts"
import type { Metadata } from "next"

import "./globals.css"

export const metadata: Metadata = {
  title: "Solitaire Next",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fonts.map((font) => font.variable).join(" ")}>
        {children}
      </body>
    </html>
  )
}
