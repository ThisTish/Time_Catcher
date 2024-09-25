import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import GoalDropdownMenu from "./GoalDropdownMenu"


const GoalCard = () => {
	return (
		<Card className=" bg-gradient-to-t to-blue-100 from-blue-300 rounded-3xl shadow-lg text-center h-40">
			<CardHeader>
				<CardTitle>4 hours</CardTitle>
				<CardDescription>weekly</CardDescription>
			</CardHeader>
			<CardContent>
				<p>1hr 30min</p>
				<GoalDropdownMenu />

			</CardContent>
		</Card>
	);
}

export default GoalCard;