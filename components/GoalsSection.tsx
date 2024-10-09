// 'use server'
import { Color, Goal } from "@prisma/client"
import GoalCard from "./GoalCard"
import { GoalCardProps } from "@/lib/types"
// import GoalTotalTimeFetch from "./GoalTotalTimeFetch"

const GoalsSection: React.FC<{goals: GoalCardProps[]}> = ({ goals })=> {

	return (
		<div className="flex gap-2">
			<h1>Goals!</h1>
			{/* {goals.map((goal) => 
				<p key={goal.id}>{goal.name}</p>
			)} */}
			{goals.map((goal => (
				<GoalCard
					key={goal.id}
					id={goal.id}
					name={goal.name}
					targetTime={goal.targetTime}
					period={goal.period}
					completed={goal.completed}
					categoryId={goal.categoryId}
				/>
			)))
			}
		</div>
	)
}

export default GoalsSection