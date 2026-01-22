import "./globals.css"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata = {
  title: "Valtreon",
  description:
    "Valtreon is a mission first investment and verification firm. Bhramavora supports accountable financial decisions through auditable evidence and impact verification.",
  metadataBase: new URL("https://valtreon.org"),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-black text-white font-sans antialiased overflow-x-hidden">
        <div className="relative min-h-screen">
          {/* subtle global background, consistent across every page */}
          <div className="pointer-events-none fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-black" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.10),transparent_40%),radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.05),transparent_55%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
          </div>

          {children}
        </div>

        <Analytics />
      </body>
    </html>
  )
}