import { Color, Goal } from "@prisma/client"
import GoalCard from "./GoalCard"
import { GoalCardProps } from "@/lib/types"

const GoalsSection: React.FC<{goals: GoalCardProps[], totalTimeByDay: number | null, totalTimeByWeek: number | null, totalTimeByMonth: number | null}> = ({ goals, totalTimeByDay, totalTimeByWeek, totalTimeByMonth})=> {

	return (
		<div >
			{goals.map((goal => (
				<GoalCard
					key={goal.id}
					id={goal.id}
					name={goal.name}
					targetTime={goal.targetTime}
					period={goal.period}
					completed={goal.completed}
					categoryId={goal.categoryId}
					totalTimeByDay = {totalTimeByDay}
					totalTimeByWeek = {totalTimeByWeek}
					totalTimeByMonth = {totalTimeByMonth}
				/>
			)))
			}
		</div>
	)
}

export default GoalsSection