'use server'
import { auth } from "@clerk/nextjs/server"
import { db } from "@/lib/db"
import { Color } from "@prisma/client"
import { CategoryData, CategoryResult } from "@/lib/types"

async function getCategories(): Promise<CategoryResult> {

	const { userId } = auth()

	if (!userId) {
		return { error: 'Error with your account, please log back in to try again.' }
	}
	const user = await db.user.findUnique({
		where: {
			clerkUserId: userId
		}
	})
	if (!user) {
		return { error: 'Error with your account, please log back in to try again.' }
	}
	const { id } = user

	try {
		const categories = await db.category.findMany({
			where: {
				userId: id
			}
		})

		return { data: categories }
	} catch (error) {

		return { error: `Error adding category, please try again. ${error}` }

	}
}

export default getCategories