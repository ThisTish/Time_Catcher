import { db } from "@/lib/db"
import { Period } from "@prisma/client"

const getTotalTimeByPeriod = async ({categoryId, period}: {categoryId: string, period: Period}): Promise<number | null> =>{

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
		case "SEASON":
			// ! don't want to use yet. need to hone in the dates.
			if (currentMonth >= 2 && currentMonth < 5) { // Spring: March 20 - June 20
				startPeriod = new Date(currentYear, 2, 20); // March 20
				endPeriod = new Date(currentYear, 5, 21);   // June 21
			} else if (currentMonth >= 5 && currentMonth < 8) { // Summer: June 21 - Sept 22
				startPeriod = new Date(currentYear, 5, 21); // June 21
				endPeriod = new Date(currentYear, 8, 23);   // September 23
			} else if (currentMonth >= 8 && currentMonth < 11) { // Autumn: Sept 23 - Dec 21
				startPeriod = new Date(currentYear, 8, 23); // September 23
				endPeriod = new Date(currentYear, 11, 21);  // December 21
			} else { // Winter: Dec 21 - March 20
				startPeriod = new Date(currentYear, 11, 21); // December 21
				endPeriod = new Date(currentYear + 1, 2, 20); // March 20 of next year
			}
			break
		case "YEAR":
			startPeriod = new Date(currentYear, 0, 1)
			endPeriod = new Date(currentYear + 1, 0, 1)
			break
	}

	const categoryTimeLogs = await db.timeLog.findMany({
		where: {
			categoryId,
			startTime: { 
				gte: startPeriod,
				lt: endPeriod
			}
		}
	})
	const totalTime = categoryTimeLogs.reduce((acc, timeLog) =>
		acc + timeLog.timePassed, 0)
	// console.log(totalTime)
	return totalTime
}

export default getTotalTimeByPeriod