import type React from "react"
import type { Metadata } from "next"
import { Bricolage_Grotesque, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SuiProvider } from "@/providers/sui-provider"
import "./globals.css"

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
})
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "Selora - Decentralized Health Platform",
  description: "Your health. Your data. Your terms. Built on Sui blockchain.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bricolageGrotesque.variable} ${openSans.variable} font-sans antialiased`}>
        <SuiProvider>{children}</SuiProvider>
        <Analytics />
      </body>
    </html>
  )
}
