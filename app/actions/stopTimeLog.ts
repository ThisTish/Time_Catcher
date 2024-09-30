// 'use server'
// import { db } from '@/lib/db'
// import { TimeLogData } from "@/lib/types"
// import { TimeLogResult } from "@/lib/types"
// import findUser from './findUser'



// async function stopTimeLog({id}: {id: string}): Promise<TimeLogResult> {

	
// 	const categoryId = id
// 	if (!categoryId) {
// 		return { error: 'Problem with Category is missing' }
// 	}

// 	const user = await findUser()
// 	const userId = user.data?.id.toString()
// 	if (!userId) {
// 		return { error: 'User login error' }
// 	}

// 	const endTime = new Date()

// 	console.log(`StopTime24: CategoryId: ${categoryId} userId: ${userId} startTime: ${endTime}}`)	

// // need to change(id) to timeLogId when i get the button to have the timeLogId

// 	// const currentTimeLog = await getTimeLog({id})

// 	try{
// 		const TimeLogData: TimeLogData = await db.timeLog.update({
// 			where: { timeLogId: id },
// 			data: {
// 				endTime
// 			}
// 		})
// 		console.dir(TimeLogData, { colors: true })
// 		return { data: TimeLogData }
// 	}


// }


// export default stopTimeLog