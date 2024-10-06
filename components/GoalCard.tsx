import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import GoalDropdownMenu from "./GoalDropdownMenu"
import { GoalCardProps} from '@/lib/types'


const GoalCard: React.FC<GoalCardProps> = ({id, name, targetTime, period, categoryColor}) => {

	return (
		<>
		<Card className={`rounded-2xl shadow-xl text-center h-40 text-stone-700`}>
			<CardHeader>
				<CardTitle>{name}</CardTitle>
			</CardHeader>
			<CardContent>
				<p>{targetTime}</p>
				<CardDescription>{period}</CardDescription>
				<GoalDropdownMenu />
			</CardContent>
		</Card>
		</>
	);
}

export default GoalCard;