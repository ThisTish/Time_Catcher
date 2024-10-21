// const data01 = [
// 	{ day: "10/20", index: 1, value: 170 },
// 	{ day: "10/20", index: 1, value: 280 },
// 	{ day: "10/22", index: 1, value: 350 },
// 	{ day: "10/23", index: 1, value: 420 },
// 	{ day: "10/24", index: 1, value: 500 },
// 	{ day: "10/25", index: 1, value: 600 },
// 	{ day: "10/26", index: 1, value: 700 },
//   ];

// for today and the past 6 days, i need to find the total time for a category
// so i need a category id
//  i need the dates
// i need to find the total time for that date.


import { db } from "@/lib/db"
import { timeLog } from "console"



const bubbleChartData = async (categoryId: string) => {
	const today = new Date()
	let dataArray: {
		day: string
		index: number
		totalTime: number
	}[] = []

	let day = today
	for (let i = 0; i < 7; i++) {
		day = new Date()
		day.setDate(day.getDate() - i)
		day.setHours(0, 0, 0, 0)

		if (categoryId) {
			try {
				const timeLogArray = await db.category.findUnique({
					where: {
						id: categoryId
					},
					include: {
						timeLogs: {
							where: {
								startTime: {
									gte: day,
									lt: new Date(day.getTime() + 24 * 60 * 60 * 1000)
								}
							}
						}
					}
				})
				const totalTime = timeLogArray?.timeLogs.reduce((acc, log) => acc + log.timePassed, 0) ?? 0
				const dataObject = {
					day: day.getDate().toString(),
					index: 1,
					totalTime
				}
				dataArray.push(dataObject)

			} catch (error) {
				return { e: error } 
			}
			// 	timeLogs.filter((timelog) =>{
				// 		return timelog.startTime.toDateString() === day.toDateString()
				// 	})
				
				// 	const totalTime = timeLogArray.reduce((acc, log) => acc + log.timePassed, 0)
				// 	dataObject[category.name] = totalTime
				// })
				// dataArray.push(dataObject)
				
			}
		}
		return { info: dataArray}
}
	export default bubbleChartData