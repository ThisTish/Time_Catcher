'use client'
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { useEffect, useState } from "react";
const Guest = () => {
	const [time, setTime] = useState('')
	const [date, setDate] = useState('')

	useEffect(() => {
		const updateClock = () => {
			const now = new Date()
			const formattedDate = now.toLocaleDateString("en-us", { month: "long", day: "2-digit", year: "numeric" })
			setDate(formattedDate)
			const formattedTime = now.toLocaleTimeString()
			setTime(formattedTime)
		}

		const intervalId = setInterval(updateClock, 1000)
		updateClock()

		return () => clearInterval(intervalId)
	}, [])


	return (


		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex gap-20 row-start-2 items-center sm:items-start bg-lime-300 ">
				<div className="w-1/3 -mt-20">
					<p className="text-xl">{date}</p>
					<p className="font-extrabold text-6xl text-center tabular-nums ">{time}</p>
				</div>
				<div className="-mb-20 space-y-7">
					<h1 className="text-6xl text-nowrap">Feel like you're losing time!?</h1>
					<p>Track your time with custom timers, make goals for categories or tasks and start catching your time to start making the best of it</p>
					<div className="flex gap-3 justify-center">
						<div className=" border-2 rounded-md border-blue-300 text-blue-400 text-lg p-1 hover:bg-blue-400 hover:text-white hover:scale-110 transition-all ease-in">

						<SignUpButton />
						</div>
						<div className="bg-blue-400 text-white rounded-md p-1 text-lg border-2 border-blue-400 hover:bg-transparent hover:text-blue-400 hover:scale-110 transition-all ease-in">
						<SignInButton />
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default Guest;