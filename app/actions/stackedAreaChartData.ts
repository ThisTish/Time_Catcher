'use server'
import findUser from "./findUser"
import { db } from '@/lib/db'



const stackedAreaChartData = async() =>{
	const user = await findUser()
	if(!user) {
		return { error: 'Trouble finding user'}
	}
	const userId = user.data?.id.toString()

	// let timePeriod

	// switch (period) {
	// 	case 'WEEK':
	// 		timePeriod = 'day'
	// 		break;
	// 	case 'MONTH':
	// 		timePeriod = 'week'
	// 		// make each week clickable to trigger back to exact 'WEEK'?
	// 		break;
	// 	case 'YEAR':
	// 			timePeriod = 'month'
	// 			// make each month clickable to trigger back to 'MONTH'?
	// 		break;
	// 	default: 'WEEK'
	// 		break;
	// }

	const today = new Date()
	let dataArray: {
		day: Date;
		[key: string]: any 
	}[] = []
	// this is where we make a function to get the time periods.(pass in case from switch case)
	let beginningOfWeek = today
	beginningOfWeek.setDate(today.getDate() - 6)
	const beginningOfWeekIso = beginningOfWeek.toISOString()

	try {
		const categories = await db.category.findMany({
			where: {
				userId
			},
			include: {
				timeLogs: {
					where: {
						startTime: {
							gt: beginningOfWeekIso
						}
					}
				}
			}
			})
		
			let day = today
			for(let i = 0; i < 7; i++){
				day = new Date()
				day.setDate(day.getDate() - i)
				day.setHours(0, 0, 0, 0)
			
			const dataObject: { [key: string]: any; day: Date } = { day };
			categories.forEach((category) => {
				
				const timeLogArray = category.timeLogs.filter((timelog) =>{
					return timelog.startTime.toDateString() === day.toDateString()
				})

				const totalTime = timeLogArray.reduce((acc, log) => acc + log.timePassed, 0)
				dataObject[category.name] = totalTime
			})
			dataArray.push(dataObject)
		}
			
		} catch (error) {
			console.log(`Error getting category times.${error}`)
			return {error: error}
		}
		
		// console.dir(dataArray)
		return {data: dataArray}
		
	}


	export default stackedAreaChartData