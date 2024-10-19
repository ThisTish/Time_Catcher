'use server'
import getTimeLog from "@/app/actions/getCurrentTimeLog";
import getTotalTimeByPeriod from "@/app/actions/getTotalTimeByPeriod"
import { error, timeLog } from "console";
import { PureComponent } from "react"
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer
} from 'recharts'
import getTimeLogsByPeriod from '../app/actions/getTimeLogsByPeriod'
import { Period } from "@prisma/client"
import { TimeLogResults } from "@/lib/types"
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import findUser from "@/app/actions/findUser";
import { timeFormat } from "@/lib/utils";


// data needs to look like:
// const data = [
// {
	// day: 10/19/2024,
	// categoryA: (totaltime) 6000
	// categoryB: ""
	// categoryC: skjldf
// }]


const PercentAreaChart = async ({ period }: { period?: Period }) => {

	const percentageAreaChartData = async() =>{
		const user = await findUser()
	const userId = user.data?.id.toString()

	if (!userId) {
		return { error: 'User login error' }
	}

		const today = new Date()
		let dataArray: { day: Date; [key: string]: any }[] = []
		let beginningOfWeek = today
		beginningOfWeek.setDate(today.getDate() - 6)
		const beginningOfWeekISO = beginningOfWeek.toISOString()

try {
			const categories = await db.category.findMany({
				where: {
					userId
				},
				include: {
					timeLogs: {
						where: {
							startTime: {
								gte: beginningOfWeekISO
							}
						}
					}
				}
			})
			let day = today
			for(let i = 0; i < 7; i++){
				day.setDate(today.getDate() - i)
				day.setHours(0, 0, 0, 0)

				const categoryArray = categories.map((category) => {
					const timeLogArray = category.timeLogs.filter(
						(log) => new Date(log.startTime).toDateString() === day.toDateString()
					)
					const totalTime = timeLogArray.reduce((acc, log) => acc + log.timePassed, 0)
					return {
						name: category.name,
						totalTime
					}
				}
				)

				const dataObject = {
					day,
					...categoryArray
				}
				dataArray.push(dataObject)
			}
			console.dir(dataArray)
		return dataArray
} catch (error) {
	console.log(`${error} error`)
}
	}

	if (error) {
		console.log(error)
	}
	percentageAreaChartData()
	return (

		<>
			<h1> Percent Area Chart </h1>
		</>
	)
}


export default PercentAreaChart;