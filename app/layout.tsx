import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from '@/components/ui/toaster'
import NavBar from "@/components/NavBar"
import Footer from '@/components/Footer'
import { TimerProvider } from "@/hooks/useTimerContext"
import getCurrentTimer from "./actions/getCurrentTimer"

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


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const currentTimerContext = await getCurrentTimer()
  let currentTimerData
  if(currentTimerContext){
    currentTimerData = currentTimerContext.data
  }

  return (
    <ClerkProvider>
      <TimerProvider ongoingTimer={currentTimerData || null}>
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <NavBar />
            {children}
            <Footer />
            <Toaster />
          </body>
        </html>
      </TimerProvider>
    </ClerkProvider>
  )
}
