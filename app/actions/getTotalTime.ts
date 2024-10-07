'use server'
import { db } from "@/lib/db"


async function getTotalTime({ categoryId }: { categoryId: string }): Promise<number | null> {
	try {
		const categoryTimeLogs = await db.timeLog.findMany({
			where: {
				categoryId
			}
		})
		const totalTime = categoryTimeLogs.reduce((acc, timeLog) =>
			acc + timeLog.timePassed, 0)
		return totalTime
	} catch (error) {
		return null
	}
}

export default getTotalTime