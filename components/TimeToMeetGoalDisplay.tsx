import { Period } from "@prisma/client"
import { db } from "@/lib/db"
import getTotalTimeByPeriod from "@/app/actions/getTotalTimeByPeriod"
import { timeFormat } from "@/lib/utils"

// interface TimeToMeetGoalDisplayProps {
// 	categoryId: string
// 	targetTime: number
// 	period: Period
// }

const TimeToMeetGoalDisplay: React.FC<{targetTime: number, totalTimeByDay: number | null, totalTimeByWeek: number | null, totalTimeByMonth: number | null}> = ({targetTime, totalTimeByDay, totalTimeByWeek, totalTimeByMonth})  => {

	if(!totalTimeByDay || !totalTimeByWeek || !totalTimeByMonth) return null
	const timeToGoForDay = Math.floor(targetTime - totalTimeByDay) / 1000
	const timeToGoForWeek = Math.floor(targetTime - totalTimeByDay) / 1000
	const timeToGoForMonth = Math.floor(targetTime - totalTimeByDay) / 1000
	const dayHours = timeFormat(timeToGoForDay).hours
	const dayMinutes = timeFormat(timeToGoForDay).minutes
	const weekHours = timeFormat(timeToGoForWeek).hours
	const weekMinutes = timeFormat(timeToGoForWeek).minutes
	const monthHours = timeFormat(timeToGoForMonth).hours
	const monthMinutes = timeFormat(timeToGoForMonth).minutes

	return (
		<>
		<h1>hours & minutes</h1>

		<p>{dayHours}h {dayMinutes}m </p>
		<p>{weekHours}h {weekMinutes}m </p>
		<p>{monthHours}h {monthMinutes}m </p>
			{/* <p>{hours}! {minutes}!</p> */}
		</>
	);
}

export default TimeToMeetGoalDisplay



// for each category, find each goal's period, calculate the total time for each based on that period when getting categories. 
// Pass that down with all the other category information. 
// on Goal Card, match up totalTimeByPeriod passed with goal's period. 
// calculate difference and show on goal card.