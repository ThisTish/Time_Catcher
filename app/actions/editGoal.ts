'use server'
import { db } from "@/lib/db"
import { Period } from "@prisma/client"
import { revalidatePath } from "next/cache"
import { GoalData, GoalResult } from "@/lib/types"


async function editGoal(formData: FormData, goalId: string): Promise<GoalResult> {

	const nameValue = formData.get('name')
	const periodValue = formData.get('period') as string

	if(!periodValue) return { error: 'Goal needs a time frame' }

	const name: string = nameValue?.toString() ?? ''
	


	try {
		const goalData = await db.goal.update({
			where:{
				id: goalId
			},
			data:{
				name,
				period: periodValue as Period
			}
		}) as GoalData
		revalidatePath('/')
		return { data: goalData}
	} catch (error) {
		return { error: `Error adding category, please try again. ${error}` }
		
	}
}

export default editGoal