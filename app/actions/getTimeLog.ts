'use server'
import { db } from "@/lib/db"
import { TimeLogData, TimeLogResult } from "@/lib/types"
import findUser from "./findUser"

const getTimeLog = async (): Promise<TimeLogResult> =>{
	// const user = await findUser()
	// const userId = user.data?.id.toString()

	// if (!userId) {
	// 	return { error: 'User login error' }
	// }
	const currentTimeLog = await db.timeLog.findFirst({
		where: {
			// userId,
			endTime: null
		}
	})
	if (!currentTimeLog) {
		return { error: 'No current time log found' }
	}
	return { data: currentTimeLog }
}

export default getTimeLog







// // get timelog by id...
// // 'use server'
// // import { db } from "@/lib/db"
// // import { TimeLogData } from "@/lib/types"
// // import { TimeLogResult } from "@/lib/types"


// // async function getTimeLog({ userId, categoryId, startTime, id }: TimeLogData): Promise<TimeLogResult> {

// // 	try {
// // 		console.log('trying to find timelog')
// // 		if (startTime === undefined) {
// // 			return { error: 'Issue with start time for timelog' }
// // 		}

// // 		const timeLog = await db.timeLog.findUnique({
// // 			where: {
// // 				id		
// // 			}
// // 		})
// // 		console.log(JSON.stringify(timeLog))
// // 		if (!timeLog) {
// // 			return { error: 'Error happened trying to find that timeLog' }
// // 		}

// // 		return {
// // 			data: {

// // 				id: timeLog.id,
// // 				userId: timeLog.userId,
// // 				categoryId: timeLog.categoryId,
// // 				startTime: timeLog.startTime,
// // 				timePassed: timeLog.timePassed,
// // 			}
// // 		}
// // 	} catch (error) {

// // 		return { error: `Error finding category, please try again. ${error}` }

// // 	}
// // }

// // export default getTimeLog