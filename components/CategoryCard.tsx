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
import getCategories from "@/app/actions/getCategories"

const CategoryCard = () => {

	

	return (
		<Card className="flex flex-col items-center bg-blue-300 w-64 border-black border-5 shadow-2xl shadow-blue-500">
			<CardHeader>
				<CardTitle>Category</CardTitle>
			</CardHeader>
			<CardContent>

				{/* for every goal, a new card in the main card will show. As the goal progresses, the gradient color will fill the goal card.*/}
				<GoalCard />
			</CardContent>
				<p className="p-1 mb-3 bg-white bg-opacity-35 rounded ">totalTime</p>
			<CardFooter className="flex gap-3">
				{/* <p className="p-1 mb-3 bg-white bg-opacity-35 rounded ">timer</p>current tracking time? */}
				{/* if currentTime is greater than startTime, or startbutton onclick(setStatus)
				<Button variant={"outline"}>Pause</Button>
				<Button variant={"default"}>End</Button> : (Start)
				*/}
				<Button variant={"default"} className="hover:scale-90 transition-transform ease-in duration-75 active:opacity-0">Start</Button>
			</CardFooter>
		</Card>
	);
}

export default CategoryCard;