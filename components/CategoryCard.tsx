'use client'

import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import GoalCard from "./GoalCard"
import { Color } from "@prisma/client"
import StartButton from "./StartButton"
import StopButton from "./StopButton"
import { useTimerContext } from "@/hooks/useTimerContext"

interface CategoryCardProps {
	id: string
	name: string
	color: Color
	totalTime: number
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, color, totalTime, id }) => {

	const { timeLogId, categoryId, status } = useTimerContext()

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


	return (
		<Card className={`flex flex-col items-center shadow-inner ${colorClasses[color]} min-w-64  `}>
			<CardHeader>
				<CardTitle>{name}</CardTitle>
			</CardHeader>
			<CardContent>
				{/*{GoalCard && (<GoalCard />)}*/}
			</CardContent>
			<p className="p-1 mb-3 bg-white bg-opacity-35 rounded ">{totalTime}</p>

			{status === 'idle' ? (
				<CardFooter className="flex gap-3">
					<StartButton categoryId={id} />
				</CardFooter>
			):(
				<CardFooter className="flex gap-3">
				{categoryId === id ? (
					<StopButton id={timeLogId} />
				):(
					<StartButton categoryId={id} disabled={true} />
				)
			}		
			</CardFooter>
			)
		}	
		

			{/* {status === 'running' && categoryId === id} */}
{/* <StopButton id={timeLogId} /> */}
{/* 
				<CardFooter className="flex gap-3">
					
					<StartButton categoryId={id} />
				</CardFooter> */}

		</Card>
	);
}

export default CategoryCard;