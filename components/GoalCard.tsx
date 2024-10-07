// 'use server'
import React from 'react';
import { GoalCardProps } from '@/lib/types';
import getTotalTimeByPeriod from '@/app/actions/getTotalTimeByPeriod';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import GoalDropdownMenu from './GoalDropdownMenu';

const GoalCard: React.FC<GoalCardProps> = async ({ id, name, targetTime, period, completed, categoryColor, categoryId }) => {
	const totalTime = await getTotalTimeByPeriod({ categoryId, period });
	const remainingTime = targetTime - (totalTime || 0);

	// Formatting for Goal Target Time
	const targetHours = Math.floor(targetTime / 60);
	const targetMinutes = targetTime % 60;

	return (
		<Card className={`bg-slate-100 bg-opacity-45 shadow-${categoryColor}-900 shadow-sm from-10% text-stone-700`}>
			{name ? (
				<CardHeader>
					<CardTitle>{name}</CardTitle>
				</CardHeader>
			) : null}
			<CardContent>
				<p>{targetHours}h {targetMinutes}m/ {period}</p>
				<p>Remaining Time: {remainingTime}</p>
				<GoalDropdownMenu />
			</CardContent>
		</Card>
	);
};



// import GoalDropdownMenu from "./GoalDropdownMenu"
// // import TimeToMeetGoalDisplay from "./TimeToMeetGoalDisplay"
// import getTotalTimeByPeriod from "@/app/actions/getTotalTimeByPeriod"
// // import { timeFormat } from "@/lib/utils"
// import {
// 	Card,
// 	CardContent,
// 	CardDescription,
// 	CardHeader,
// 	CardTitle,
// } from "@/components/ui/card"
// import { GoalCardProps } from '@/lib/types'
// import { useEffect, useState } from "react"

// const GoalCard: React.FC<GoalCardProps> = ({ id, name, targetTime, period, completed, categoryColor, categoryId }) => {
// 	const [remainingTime, setRemainingTime] = useState<number | null>(null)

// 	// useEffect(() =>{
// 	// 	const fetchTotalTime = async () =>{
// 	// 		const categoryTimeByPeriod = await getTotalTimeByPeriod({categoryId, period})
// 	// 		if(categoryTimeByPeriod !== null){
// 	// 			setRemainingTime(targetTime - categoryTimeByPeriod)
// 	// 		}
// 	// 	}
// 	// 	fetchTotalTime()
// 	// }, [categoryId, period, targetTime])

// 	// Formatting for Goal Target Time
// 	const targetHours = Math.floor(targetTime / 60)
// 	const targetMinutes = targetTime % 60

// 	// const categoryTimeByPeriod = await getTotalTimeByPeriod({categoryId, period})
// 	// if(!categoryTimeByPeriod || categoryTimeByPeriod < 0) return null
// 	// const { hours, minutes } = timeFormat(categoryTimeByPeriod)

// 	// const hoursToGo = targetHours - hours
// 	// const minutesToGo = targetMinutes - minutes


// 	return (

// 		<Card className={`bg-slate-100 bg-opacity-45 shadow-${categoryColor}-900 shadow-sm from-10% text-stone-700`}>
// 			{name ?
// 				<CardHeader>
// 					<CardTitle>{name}</CardTitle>
// 				</CardHeader>
// 				: null
// 			}
// 			<CardContent>
// 				<p>{targetHours}h {targetMinutes}m/ {period}</p>
// 				{remainingTime !== null
// 				? <p>{remainingTime}</p>
// 			: null
// 			}
// 				{/* <TimeToMeetGoalDisplay hours={hoursToGo} minutes={minutesToGo}/> */}
// 				{/* Causing errors */}
// 				<GoalDropdownMenu />
// 			</CardContent>
// 		</Card>
// 	)
// }


export default GoalCard