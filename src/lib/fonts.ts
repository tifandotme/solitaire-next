import { JetBrains_Mono, Inter } from "next/font/google"
import localFont from "next/font/local"

const InterSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fonts = [InterSans, JetBrainsMono]
