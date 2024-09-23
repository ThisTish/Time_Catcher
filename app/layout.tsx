import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import {
  ClerkProvider
} from '@clerk/nextjs'
import NavBar from "@/components/NavBar"


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Time Catcher",
  description: "Catch your time, before it catches you.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <NavBar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
