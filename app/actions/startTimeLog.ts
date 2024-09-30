'use server'
import { db } from '@/lib/db'
import { TimeLogData } from "@/lib/types"
import { TimeLogResult } from "@/lib/types"
import findUser from './findUser'

async function startTimeLog({ id }: { id: string | null }): Promise<TimeLogResult> {

	const categoryId = id
	if (!categoryId) {
		return { error: 'Problem with Category is missing' }
	}

	const user = await findUser()
	const userId = user.data?.id.toString()
	if (!userId) {
		return { error: 'User login error' }
	}

	const startTime = new Date()

	try {
		const TimeLogData: TimeLogData = await db.timeLog.create({
			data: {
				startTime,
				timePassed: 0,
				categoryId,
				userId

			}
		})

		return { data: TimeLogData }

	} catch (error) {
		return { error: 'Error with starting timer!' }
	}
}


export default startTimeLog