'use client'

import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { useEffect, useState } from "react"
import StartButton from "./StartButton"
import StopButton from "./StopButton"
// import TotalTimeDisplay from "./TotalTimeDisplay"
import { useTimerContext } from "@/hooks/useTimerContext"
import { CategoryCardProps } from "@/lib/types"
import DeleteCategoryButton from "./DeleteCategoryButton"
import TimerDisplay from "./TimerDisplay"
// import GoalsSection from "./GoalsSection"
import AddGoalDrawer from "./AddGoalDrawer"


const CategoryCard: React.FC<CategoryCardProps> = ({ name, color, id, totalTime, goals }) => {
	const [timer, setTimer] = useState<number>(0)
	const { timeLogId, categoryId, status, startTime } = useTimerContext()

	// to start timer
	useEffect(() => {
		let timerInterval: NodeJS.Timeout | null = null;

		if (startTime) {
			timerInterval = setInterval(() => {
				let currentTime = new Date().getTime()
				let currentTimePassed = Math.floor((currentTime - new Date(startTime).getTime()) / 1000)
				setTimer(currentTimePassed)
			}, 1000)
		}
		return () => {
			if (timerInterval) {
				clearInterval(timerInterval)
			}
		}
	}, [startTime])


	return (
		<Card className={` relative ${status === 'running' && categoryId === id ? 'shadow-lg' : 'shadow-inner'} bg-${color.toLowerCase()}-300 shadow-${color.toLowerCase()}-900 size-80  `}>
			<CardHeader>
				<CardTitle>{name}</CardTitle>
				{/* going to be options or expand button */}
				<DeleteCategoryButton categoryName={name} />
				{/* <TotalTimeDisplay totalTime={totalTime} /> */}
			</CardHeader>
			<CardContent>
				
				{/* Goals */}
				{/* {goals && goals.length > 0
					? <GoalsSection goals={goals.map(goal => ({ ...goal, categoryColor: color }))} categoryColor={`${color.toLowerCase()}`} />
					: <AddGoalDrawer categoryId={id} />
				} */}
			</CardContent>

			{/* Start & Stop buttons respectively */}
			{status === 'idle' ? (
				<CardFooter >
					<StartButton categoryId={id} color={color} />
				</CardFooter>
			) : (
				<CardFooter >
					{categoryId === id ? (
						<div className="text-center">
							<TimerDisplay time={timer} />
							<StopButton id={timeLogId} startTime={startTime} />
						</div>
					) : (<>
						<StartButton categoryId={id} disabled={true} color={color} />
						{/* <AddGoalDrawer categoryId={id}/> */}
					</>
					)
					}
				</CardFooter>
			)
			}
		</Card>
	);
}

export default CategoryCard