'use server'
import { db } from "@/lib/db"
import { TimeLogData } from "@/lib/types"
import { TimeLogResult } from "@/lib/types"


async function getTimeLog({ userId, categoryId, startTime }: TimeLogData): Promise<TimeLogResult> {

	try {
		console.log('trying to find timelog')
		if (startTime === undefined) {
			return { error: 'startTime is required' }
		}

		const timeLog = await db.timeLog.findUnique({
			where: {
				userId_categoryId_startTime: { userId, categoryId, startTime }
			}
		})
		console.log(JSON.stringify(timeLog))
		if (!timeLog) {
			return { error: 'Error happened trying to find that timeLog' }
		}

		return {
			data: {
				userId: timeLog.userId,
				categoryId: timeLog.categoryId,
				startTime: timeLog.startTime,
				timePassed: timeLog.timePassed,
			}
		}
	} catch (error) {

		return { error: `Error finding category, please try again. ${error}` }

	}
}

export default getTimeLog