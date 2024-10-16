'use server'
import { db } from "@/lib/db"
import { GoalResult } from "@/lib/types"



async function getGoal(goalId: string): Promise<GoalResult> {

	try {
		const goal = await db.goal.findUnique({
			where: {
				id: goalId
			}
		})

		if (!goal) {
			return { error: 'Error happened trying to find that goal' }
		}

		return { data: goal }
		
	} catch (error) {
		return { error: `Error finding goal, please try again. ${error}` }
	}
}

export default getGoal