import Guest from "@/components/Guest"
import { currentUser } from "@clerk/nextjs/server"
import CategoryCardSection from "@/components/CategoryCardSection"
// import PercentAreaChart from "@/components/PercentAreaChart"
// import StackedBarChart from "@/components/StackedBarChart"
import ChartSection from "@/components/ChartSection"
export default async function Home() {
const user = await currentUser()

  if(!user) return <Guest />


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <CategoryCardSection />
        {/* <PercentAreaChart /> */}
        <ChartSection />
      </main>
    </div>
  )
}
