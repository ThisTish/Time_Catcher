// // 'use server'
import { GoalCardProps } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import GoalDropdownMenu from './GoalDropdownMenu'
import { timeFormat } from '@/lib/utils'

const GoalCard: React.FC<GoalCardProps> = ({ id, name, targetTime, period, completed, categoryId }) => {

	
	// Formatting for Goal Target Time
	const targetTimeMs = targetTime / 1000
	const targetHours = timeFormat(targetTimeMs).hours
	const targetMinutes = timeFormat(targetTimeMs).minutes

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