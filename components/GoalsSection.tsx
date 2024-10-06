import { Goal } from "@prisma/client"
import GoalCard from "./GoalCard"

const GoalsSection = ({ goals, categoryColor }: { goals: Goal[], categoryColor: string }) => {

	return (
		<div className=" grid-flow-col">
			{goals.map((goal) => (
				<GoalCard
					key={goal.id}
					id={goal.id}
					name={goal.name}
					targetTime={goal.targetTime}
					period={goal.period}
					categoryColor={categoryColor}
				/>
			))

			}
		</div>
	)
}

export default GoalsSection