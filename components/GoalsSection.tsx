// 'use server'
import { Color, Goal } from "@prisma/client"
import GoalCard from "./GoalCard"
import { GoalCardProps } from "@/lib/types"
import GoalTotalTimeFetch from "./GoalTotalTimeFetch"

const GoalsSection: React.FC<{goals: GoalCardProps[], categoryColor: string}> = ({ goals, categoryColor })=> {

	return (
		<div className="flex gap-2">
			{goals.map((goal => (
				<GoalCard
					key={goal.id}
					{...goal}
					// id={goal.id}
					// name={goal.name}
					// targetTime={goal.targetTime}
					// period={goal.period}
					// completed={goal.completed}
					// categoryId={goal.categoryId}
					categoryColor={categoryColor}
				/>
			)))

			}
		</div>
	)
}

export default GoalsSection