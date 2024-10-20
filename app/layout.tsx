import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from '@/components/ui/toaster'
import NavBar from "@/components/NavBar"
import Footer from '@/components/Footer'
import { TimerProvider } from "@/hooks/useTimerContext"
import getCurrentTimer from "./actions/getCurrentTimer"


const cabinetGrotesk = localFont({
  src: [
    {
      path: './fonts/CabinetGrotesk-Variable.woff2',
      weight: '800',
      style: 'semi-bold'
    },
    {
      path: './fonts/CabinetGrotesk-Medium.woff2',
      weight: '600',
      style: 'normal'
    }
  ],
  variable: '--font-cabinet'
})
// const cabinetGrotesk = localFont({
//   src:'./fonts/CabinetGrotesk-Variable.woff2',
//   weight: '800',
//   variable: '--font-cabinet'
// })

const satoshi = localFont({
  src: './fonts/Satoshi-Variable.woff2',
  weight: '600',
  variable: '--font-satoshi'

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
  // while loading, display skeleton in category area.
  let currentTimerData
  if (currentTimerContext) {
    currentTimerData = currentTimerContext.data
  }

  return (
    <ClerkProvider>
      <TimerProvider ongoingTimer={currentTimerData || null}>
        <html lang="en">
          <body 
          className={`${cabinetGrotesk.variable} ${satoshi.variable}`}
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
