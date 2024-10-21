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
		<Card className={`bg-gradient-to-t from-slate-100 to-slate-400 to-95% bg-opacity-55 shadow-md text-stone-700`}>
			
				<CardHeader>
					<CardTitle>{period}</CardTitle>
				<GoalDropdownMenu goalId={id}/>

				</CardHeader>
			
			<CardContent className='space-y-3'>
				<h5 className='text-lg font-bold'>Target Time:</h5>
				<p className='text-end'>{targetHours}h {targetMinutes}m</p>
				<TimeToMeetGoalDisplay period={period} targetTime={targetTime} totalTimeByDay={totalTimeByDay ?? null} totalTimeByWeek={totalTimeByWeek ?? null} totalTimeByMonth={totalTimeByMonth ?? null}/>
				
			</CardContent>
		</Card>
	)
}



export default GoalCard