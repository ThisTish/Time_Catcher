// ? Don't need this, since category has information

// 'use server'
// import { db } from '@/lib/db'
// import { Period } from '@prisma/client';

// interface GoalData {
// 	id: string
//     name?: string | null
//     categoryId: string
//     targetTime: number
//     period: Period
// }

// interface GoalResults {
// 	data?: GoalData[] | null
// 	error?: string
// }

// const getGoalsByCategory = async ({categoryId}: {categoryId: string}): Promise<GoalResults> => {
// 	const goalsByCategory: GoalData[] | null = await db.goal.findMany({
// 		where: {
// 			categoryId
// 		}
// 	})
// 	if(!goalsByCategory) return { data: null }

// 	return { data:goalsByCategory } 
// }

// export default getGoalsByCategory