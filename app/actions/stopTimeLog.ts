'use server'
import { db } from '@/lib/db'
import { CategoryData, CategoryResult, TimeLogData, TimeLogResult } from '@/lib/types'
import { revalidatePath } from 'next/cache';


async function stopTimeLog({ id, startTime }: { id: string; startTime: Date | null }): Promise<TimeLogResult> {

	const endTime = new Date()
	if (!startTime) return { error: 'error with startTime for this time log' }
	const timePassed = endTime.getTime() - new Date(startTime).getTime()

	try {
		const TimeLogData: TimeLogData = await db.timeLog.update({
			where: { id },
			data: {
				endTime,
				timePassed
			}
		})

		const timeLogCategory: CategoryData | null = await db.category.findUnique({
			where: {
				id: TimeLogData.categoryId
			}
		})

		if (!timeLogCategory || timeLogCategory === null) return { error: 'Category for Time Log not Found' }
		console.log(timeLogCategory)

		const newTotalTime = timeLogCategory.totalTime + TimeLogData.timePassed

		await db.category.update({
			where: {
				id: timeLogCategory.id
			},
			data: {
				totalTime: newTotalTime
			}
		})
		revalidatePath('/')
		return { data: TimeLogData }

	} catch (error) {
		return { error: 'error finding timer to stop' }
	}
}


export default stopTimeLog