// // 'use server'
import { GoalCardProps } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import GoalDropdownMenu from './GoalDropdownMenu'
import DeleteGoalButton from './DeleteGoalButton'

const GoalCard: React.FC<GoalCardProps> = ({ id, name, targetTime, period, completed, categoryId }) => {

	// Formatting for Goal Target Time
	const targetHours = Math.floor(targetTime / 60)
	const targetMinutes = targetTime % 60

	return (
		<Card className={`bg-slate-100 bg-opacity-45 shadow-sm from-10% text-stone-700 relative`}>
			{name ? (
				<CardHeader>
					<CardTitle>{name}</CardTitle>
				</CardHeader>
			) : null}
			<CardContent>
				<p>{targetHours}h {targetMinutes}m/ {period}</p>
				<GoalDropdownMenu goalId={id}/>
			</CardContent>
		</Card>
	)
}



export default GoalCard