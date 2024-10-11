// // 'use server'
import { GoalCardProps } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import GoalDropdownMenu from './GoalDropdownMenu'
import { timeFormat } from '@/lib/utils'
import TimeToMeetGoalDisplay from './TimeToMeetGoalDisplay'

const GoalCard: React.FC<GoalCardProps> = ({ id, name, targetTime, period, completed, categoryId, totalTimeByDay, totalTimeByWeek, totalTimeByMonth }) => {

	
	// Formatting for Goal Target Time
	const targetTimeMs = targetTime / 1000
	const targetHours = timeFormat(targetTimeMs).hours
	const targetMinutes = timeFormat(targetTimeMs).minutes

	return (
		<Card className={`bg-gradient-to-t from-slate-100 to-slate-400 to-95% bg-opacity-55 shadow-md text-stone-700 h-44`}>
			
				<CardHeader>
					<CardTitle>{name}</CardTitle>
				</CardHeader>
			
			<CardContent>
				<p>{targetHours}h {targetMinutes}m/ {period}</p>
				<TimeToMeetGoalDisplay period={period} targetTime={targetTime} totalTimeByDay={totalTimeByDay ?? null} totalTimeByWeek={totalTimeByWeek ?? null} totalTimeByMonth={totalTimeByMonth ?? null}/>
				<GoalDropdownMenu goalId={id}/>

			</CardContent>
		</Card>
	)
}



export default GoalCard