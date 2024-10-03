'use server'
import { db } from '@/lib/db'
import { TimeLogData, TimeLogResult } from '@/lib/types'

async function stopTimeLog({ id, startTime }: { id: string; startTime: Date | null }): Promise<TimeLogResult> {

		const endTime = new Date()
		if(!startTime) return { error: 'error with startTime for this time log'}
		const timePassed = endTime.getTime() - new Date(startTime).getTime()

		try {
			const TimeLogData: TimeLogData = await db.timeLog.update({
				where: { id },
				data: {
					endTime,
					timePassed
				}
			})

			return { data: TimeLogData }
		
		} catch (error) {
			return { error: 'error finding timer to stop' }
		}
	}


export default stopTimeLog
