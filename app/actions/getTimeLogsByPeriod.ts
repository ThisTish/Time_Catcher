'use server'
import { db } from "@/lib/db"
import { TimeLogData } from "@/lib/types"

interface TimeLogResults {
  id: string;
  userId: string;
  categoryId: string;
  startTime: Date;
  endTime: Date | null;
  timePassed: number;
}
import findUser from "./findUser"
import { Period } from "@prisma/client"

const getTimeLogsByPeriod = async (period: Period): Promise<TimeLogResults[]> =>{ 
	const user = await findUser()
	const userId = user.data?.id.toString()

	if (!userId) {
		return []
	}

	const currentYear = new Date().getFullYear()
	const currentMonth = new Date().getMonth()


	let startPeriod: Date
	let endPeriod: Date = new Date()

	switch (period) {
		case "DAY":
			startPeriod = new Date(new Date().setHours(0, 0, 0, 0))
			endPeriod = new Date(new Date().setHours(24, 0, 0, 0))
			break
		case "WEEK":
			startPeriod = new Date()
			startPeriod.setDate(startPeriod.getDate() - startPeriod.getDay())
			startPeriod.setHours(0, 0, 0, 0)
			endPeriod.setDate(startPeriod.getDate() + 7)
			break
		case "MONTH":
			startPeriod = new Date(currentYear, currentMonth, 1)
			endPeriod = new Date(currentYear, currentMonth + 1, 1)
			break
		default:
			startPeriod = new Date(new Date().setHours(0, 0, 0, 0))
			endPeriod = new Date(new Date().setHours(24, 0, 0, 0))
			break
	}

	const timeLogs = await db.timeLog.findMany({
		where: {
			startTime: { 
				gte: startPeriod,
				lt: endPeriod
			}
		}
	})
	// if (!timeLogs) {
	// 	throw new Error('None Found')
	// }
	const timeLogArray: TimeLogResults[] = timeLogs.map(log => ({
		id: log.id,
		userId: log.userId,
		categoryId: log.categoryId,
		startTime: log.startTime,
		endTime: log?.endTime,
		timePassed: log.timePassed
	}))
	return timeLogArray
}

export default getTimeLogsByPeriod
