'use server'
import { db } from "@/lib/db"
import { CategoryResults } from "@/lib/types"
import findUser from "./findUser"

async function getCategories(): Promise<CategoryResults> {

	const user = await findUser()
	const userId = user.data?.id.toString()

	if (!userId) {
		return { error: 'User login error' }
	}

	try {
		const categories = await db.category.findMany({
			where: {
				userId
			},
			include:{
				goals: true,
			}
		})
		return { data: categories }
	} catch (error) {

		return { error: `Error getting categories, ${error}` }
	}
}

export default getCategories