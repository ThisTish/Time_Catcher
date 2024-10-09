'use server'
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"


const deleteGoal = async ({ goalId }: { goalId: string }) => {

	try {
		const deletedGoal = await db.goal.delete({
			where: {
				id: goalId
			}
		})

		revalidatePath('/')
		return { data: deletedGoal}

	} catch (error) {
		return { error: `There has been an error: ${error}` }
	}
}

export default deleteGoal