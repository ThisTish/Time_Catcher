import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import GoalCard from "./GoalCard"
import { Color } from "@prisma/client"

interface CategoryCardProps {
	id: string
	name: string
	color: Color
	totalTime: number
	userId: string
}

const CategoryCard: React.FC<CategoryCardProps> = ({name, color, totalTime, userId, id}  ) => {

	const colorClasses: {[key: string]: string} = {
		BLUE: 'bg-blue-300 shadow-blue-900',
		GREEN: 'bg-green-300 shadow-green-900',
		YELLOW: 'bg-yellow-300 shadow-yellow-900',
		ORANGE: 'bg-orange-300 shadow-orange-900',
		RED: 'bg-red-300 shadow-red-900',
		PURPLE: 'bg-purple-300 shadow-purple-900',
		PINK: 'bg-pink-300 shadow-pink-900',
		BLACK: 'bg-stone-900 shadow-stone-50 text-white',
		WHITE: 'bg-white shadow-stone-900',
	}
	

	return (
		<Card className={`flex flex-col items-center shadow-inner ${colorClasses[color]} min-w-64  `}>
			<CardHeader>
				<CardTitle>{name}</CardTitle>
			</CardHeader>
			<CardContent>

				{/* for every goal, a new card in the main card will show. As the goal progresses, the gradient color will fill the goal card.*/}
				{/* <GoalCard /> */}
			</CardContent>
				<p className="p-1 mb-3 bg-white bg-opacity-35 rounded ">{totalTime}</p>
			<CardFooter className="flex gap-3">
				{/* <p className="p-1 mb-3 bg-white bg-opacity-35 rounded ">timer</p>current tracking time? */}
				{/* if currentTime is greater than startTime, or start button onclick(setStatus)
				<Button variant={"outline"}>Pause</Button>
				<Button variant={"default"}>End</Button> : (Start)
				*/}
				<Button variant={"secondary"} className="shadow-md hover:shadow-none hover:scale-90 transition-transform ease-in duration-75 active:opacity-0" data-categoryId={id}>Start</Button>
			</CardFooter>
		</Card>
	);
}

export default CategoryCard;