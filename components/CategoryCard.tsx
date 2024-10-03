'use client'

import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { useEffect, useState } from "react"
import GoalCard from "./GoalCard"
import StartButton from "./StartButton"
import StopButton from "./StopButton"
import { useTimerContext } from "@/hooks/useTimerContext"
import { CategoryCardProps } from "@/lib/types"
import getTotalTime from '@/app/actions/getTotalTime' 



const CategoryCard: React.FC<CategoryCardProps> = ({ name, color, id }) => {
	const [timer, setTimer] = useState<number>(0)
	const [ totalTime, setTotalTime] = useState<number | string>("loading")

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

	useEffect(() =>{
		let timerInterval: NodeJS.Timeout | null = null;
	
		if(startTime){
			timerInterval = setInterval(() =>{
				let currentTime = new Date().getTime()
				let currentTimePassed = Math.floor((currentTime - new Date(startTime).getTime()) /1000)
				setTimer(currentTimePassed)
			}, 1000)
			if(categoryId){
			
			getTotalTime({categoryId})
		.then((result) => {
			if(typeof result === 'number'){
				console.log(totalTime)
				setTotalTime(result)
			}else{
				setTotalTime('Error fetching total time')
			}
		})
		.catch(() => setTotalTime('Error fetching total time'))
			}
		}
		return () =>{
			if(timerInterval){
				clearInterval(timerInterval)
			}
		}	
}, [startTime, categoryId])



	return (
		<Card className={`flex flex-col items-center shadow-inner ${colorClasses[color]} min-w-64  `}>
			<CardHeader>
				<CardTitle>{name}</CardTitle>
			</CardHeader>
			<CardContent>
				{/*{GoalCard && (<GoalCard />)}*/}
				{typeof totalTime === 'number' ? 
				<p>{`${Math.floor(totalTime/60)} : ${Math.floor(totalTime % 60)}`}</p> :
				<p>{totalTime}</p>
}
			</CardContent>

			{status === 'idle' ? (
				<CardFooter className="flex gap-3">
					<StartButton categoryId={id} />
				</CardFooter>
			) : (
				<CardFooter className="flex gap-3">
					{categoryId === id ? (
						<div className="flex flex-col text-center">
							<p className="p-1 mb-3 bg-white bg-opacity-35 rounded ">
								{`${Math.floor(timer/60)} min ${timer % 60} sec`}
							</p>

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