'use server'
import { db } from '@/lib/db'
import { TimeLogData, TimeLogResult } from '@/lib/types'
import { useTimerContext } from '@/hooks/useTimerContext'



async function stopTimeLog({id}: {id: string }): Promise<TimeLogResult> {
	
	const endTime = new Date()

	try{
		const TimeLogData: TimeLogData = await db.timeLog.update({
			where: { id },
			data: {
				endTime
			}
		})

		console.dir(TimeLogData, { colors: true })
		
		return { data: TimeLogData }
	}catch(error){
		return {error: 'error finding timer to stop'}
	}
}


export default stopTimeLog