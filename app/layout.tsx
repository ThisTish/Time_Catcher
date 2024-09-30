import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from '@/components/ui/toaster'
import NavBar from "@/components/NavBar"
import Footer from '@/components/Footer'
import { TimerProvider } from "@/hooks/useTimerContext"
import getTimeLog from "./actions/getTimeLog"


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

  const getCurrentTimer = async () => {
    const { data, error } = await getTimeLog()
    if (data) {
      const currentTimer = {
        id: data.id,
        userId: data.userId,
        categoryId: data.categoryId,
        startTime: data.startTime,
        endTime: data.endTime,
        timePassed: data.timePassed
      }
      return currentTimer
    }
  }
  const currentTimerContext = await getCurrentTimer()

  return (
    <ClerkProvider>
      <TimerProvider ongoingTimer={currentTimerContext || null}>
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
