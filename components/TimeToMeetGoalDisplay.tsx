'use client'
import { Period } from "@prisma/client"
import { db } from "@/lib/db"
import getTotalTimeByPeriod from "@/app/actions/getTotalTimeByPeriod"
import { timeFormat } from "@/lib/utils"
import { useEffect, useState } from "react";


interface TimeToMeetGoalDisplayProps {
	targetTime: number
	period: Period
	totalTimeByDay: number | null
	totalTimeByWeek: number | null
	totalTimeByMonth: number | null
}

const TimeToMeetGoalDisplay: React.FC<TimeToMeetGoalDisplayProps>= ({targetTime, period, totalTimeByDay, totalTimeByWeek, totalTimeByMonth})  => {
	if(!totalTimeByDay && !totalTimeByWeek && !totalTimeByMonth) return null
	// const timeToGoForDay = Math.floor(targetTime - totalTimeByDay) / 1000
	// const timeToGoForWeek = Math.floor(targetTime - totalTimeByDay) / 1000
	// const timeToGoForMonth = Math.floor(targetTime - totalTimeByDay) / 1000
	// const dayHours = timeFormat(timeToGoForDay).hours
	// const dayMinutes = timeFormat(timeToGoForDay).minutes
	// const weekHours = timeFormat(timeToGoForWeek).hours
	// const weekMinutes = timeFormat(timeToGoForWeek).minutes
	// const monthHours = timeFormat(timeToGoForMonth).hours
	// const monthMinutes = timeFormat(timeToGoForMonth).minutes

// work on year. and eventually season

const [hours, setHours] = useState<number | null>(null);
const [minutes, setMinutes] = useState<number | null>(null);

useEffect(() => {
	const getTotalTime = () => {
		switch (period) {
			case 'DAY':
				return totalTimeByDay;
			case 'WEEK':
				return totalTimeByWeek;
			case 'MONTH':
				return totalTimeByMonth;
			default:
				return null;
		}
	};

	const totalTime = getTotalTime();
	if (totalTime === null) return;

	// if time to go is negative(one, it's not showing?) two, mark goal as completed.
	const timeToGo = Math.floor(targetTime - totalTime) / 1000;
	const { hours, minutes } = timeFormat(timeToGo);
	setHours(hours);
	setMinutes(minutes);
}, [targetTime, period, totalTimeByDay, totalTimeByWeek, totalTimeByMonth]);


	return (


		<>
		<h5 className="font-bold tracking-tight text-lg">Time to go:</h5>
		<p className="text-end">{hours}h {minutes}m </p>
		</>
	);
}

export default TimeToMeetGoalDisplay



// for each category, find each goal's period, calculate the total time for each based on that period when getting categories. 
// Pass that down with all the other category information. 
// on Goal Card, match up totalTimeByPeriod passed with goal's period. 
// calculate difference and show on goal card.