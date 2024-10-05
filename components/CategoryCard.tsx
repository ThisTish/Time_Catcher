'use client'

import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { useEffect, useState} from "react"
import GoalCard from "./GoalCard"
import StartButton from "./StartButton"
import StopButton from "./StopButton"
import TotalTimeDisplay from "./TotalTimeDisplay"
import { useTimerContext } from "@/hooks/useTimerContext"
import { CategoryCardProps } from "@/lib/types"
import DeleteCategoryButton from "./DeleteCategoryButton"
import TimerDisplay from "./TimerDisplay"
import { Timer } from "lucide-react"
import AddGoalButton from "./AddGoalDrawer"
import { Slider } from "@radix-ui/react-slider"



const CategoryCard: React.FC<CategoryCardProps> = ({ name, color, id, totalTime }) => {
	const [timer, setTimer] = useState<number>(0)

	const { timeLogId, categoryId, status, startTime } = useTimerContext()
	const colorClasses: { [key: string]: string } = {
		BLUE: 'bg-blue-300 shadow-blue-900',
		GREEN: 'bg-green-300 shadow-green-900',
		YELLOW: 'bg-yellow-300 shadow-yellow-900',
		ORANGE: 'bg-orange-300 shadow-orange-900',
		RED: 'bg-red-300 shadow-red-900',
		PURPLE: 'bg-purple-300 shadow-purple-900',
		PINK: 'bg-pink-300 shadow-pink-900',
		BLACK: 'bg-stone-900 shadow-stone-50 text-white ',
		WHITE: 'bg-white shadow-stone-900',
	}

// to start timer
	useEffect(() =>{
		let timerInterval: NodeJS.Timeout | null = null;
	
		if(startTime){
			timerInterval = setInterval(() =>{
				let currentTime = new Date().getTime()
				let currentTimePassed = Math.floor((currentTime - new Date(startTime).getTime()) /1000)
				setTimer(currentTimePassed)
			}, 1000)
		}
		return () =>{
			if(timerInterval){
				clearInterval(timerInterval)
			}
		}	
}, [startTime])


	return (
		//* clx to make card pop when running
		<Card className={`flex flex-col relative items-center shadow-inner ${colorClasses[color]} min-w-64  `}>
			<CardHeader>
				<CardTitle>{name}</CardTitle>
				<DeleteCategoryButton categoryName={name}/>
			</CardHeader>
			<CardContent>
				{/*{GoalCard && (<GoalCard />)}*/}
				<TotalTimeDisplay totalTime={totalTime} />

			</CardContent>

			{status === 'idle' ? (
				<CardFooter className="gap-4">
					<AddGoalButton categoryId={id} />
					<StartButton categoryId={id} />
				</CardFooter>
			) : (
				<CardFooter >
					{categoryId === id ? (
							<div className="text-center">
								<TimerDisplay time={timer} />
								<StopButton id={timeLogId} startTime={startTime} />
							</div>
						) : (
							<StartButton categoryId={id} disabled={true} />
						)
					}
				</CardFooter>
			)
			}
		</Card>
	);
}

export default CategoryCard;