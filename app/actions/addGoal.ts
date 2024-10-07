'use server'
import { db } from "@/lib/db"
// import { GoalData, GoalResult } from "@/lib/types"
import findUser from "./findUser"
import { revalidatePath } from "next/cache"
import { Period } from "@prisma/client"

interface GoalData {
	name?: string | null
	userId: string
	categoryId: string
	targetTime: number
	period: ('DAY' | 'WEEK' | 'MONTH' | 'SEASON' | 'YEAR')
}

interface GoalResult {
	data?: GoalData
	error?: string
}


async function addGoal(formData: FormData): Promise<GoalResult> {
	const name = formData.get('name')?.toString()
	
	const targetTimeValue = Number(formData.get('targetTime'))
	if(!targetTimeValue) return {error: "Target Time necessary"}
	const targetTime = targetTimeValue

	const user = await findUser()
	const userId = user.data?.id.toString()
	if (!userId) {
		return { error: 'User login error' }
	}
	
	const categoryIdValue = formData.get('categoryId')
	const categoryId = (categoryIdValue ?? '').toString()
	if (!categoryId || categoryId === '') {
		return { error: 'Trouble getting the category information' }
	}

	const period: Period = formData.get('period')?.toString().toUpperCase() as Period
	
	try {
		const GoalData: GoalData = await db.goal.create({
			data: {
				name,
				userId,
				categoryId,
				targetTime,
				period
			}
		})
		revalidatePath('/')
		console.dir(GoalData)
		return { data: GoalData}

	} catch (error) {
		return { error: `Error adding category, please try again. ${error}` }
		
	}
}

export default addGoal