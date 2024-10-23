'use client'
import { SignInButton, SignUpButton } from "@clerk/nextjs"
import { useEffect, useState } from "react"

const GuestHero = () => {
	const [time, setTime] = useState('')
	const [date, setDate] = useState('')

	useEffect(() => {
		const updateClock = () => {
			const now = new Date()
			const formattedDate = now.toLocaleDateString("en-us", { month: "long", day: "2-digit", year: "numeric" })
			setDate(formattedDate)
			const formattedTime = now.toLocaleTimeString().padStart(11, '0')
			setTime(formattedTime)
		}

		const intervalId = setInterval(updateClock, 1000)
		updateClock()

		return () => clearInterval(intervalId)
	}, [])

	return (

		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
			<main className="flex gap-20 row-start-2 items-center sm:items-start bg-lime-300 ">
				{/* Clock */}
				<div className="w-full relative m-10">
					<p className="text-xl">{date}</p>
					<p className="font-extrabold tracking-wider text-7xl text-center tabular-nums text-nowrap">{time}</p>
					<div className="absolute top-6 -left-2 flex">
					<div className="w-14 h-20 border-2 border-stone-800 rounded-sm"></div>
					<div className="w-14 h-20 border-2 border-stone-800 rounded-sm"></div>
					</div>
					<div className="absolute top-6 left-32 flex">
					<div className="w-14 h-20 border-2 border-stone-800 rounded-sm"></div>
					<div className="w-14 h-20 border-2 border-stone-800 rounded-sm"></div>
					</div>
					<div className="absolute top-6 left-64 flex">
					<div className="w-14 h-20 border-2 border-stone-800 rounded-sm"></div>
					<div className="w-14 h-20 border-2 border-stone-800 rounded-sm"></div>
					</div>
					<div className="w-36 h-20 border-2 border-stone-800 absolute top-6 -right-1 rounded-sm"></div>
				</div>


				{/* summary */}
				<div className="space-y-10">
					<h1 className="text-6xl text-nowrap">Feel like you're losing time!?</h1>
					<p>Track your time with custom timers, make goals for categories or tasks and start catching your time to start making the best of it</p>
					<div className="flex gap-3 mr-20 justify-end">
						
						{/* buttons */}
						<div className=" border-2 rounded-md border-blue-300 text-blue-600 text-lg p-1 hover:bg-blue-600 hover:text-white hover:scale-110 transition-all ease-in">
							<SignUpButton />
						</div>
						<div className="bg-blue-600 text-white rounded-md p-1 text-lg border-2 border-blue-600 hover:bg-transparent hover:text-blue-600 hover: hover:scale-110 transition-all ease-in">
							<SignInButton />
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}
 
export default GuestHero