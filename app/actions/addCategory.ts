'use server'
import { auth, User } from "@clerk/nextjs/server"
import { db } from "@/lib/db"
import { Color } from "@prisma/client"
import { CategoryData } from "@/lib/types"
import { CategoryResult } from "@/lib/types"
import findUser from "./findUser"
import { revalidatePath } from "next/cache"


async function addCategory(formData: FormData): Promise<CategoryResult> {

	const nameValue = formData.get('name')
	const colorValue = formData.get('color')

	if(!nameValue || nameValue === '' || !colorValue || colorValue === ''){
		return { error: 'Category name & color are required' }
	}
	
	const name: string = nameValue.toString()
	const color: Color = colorValue.toString().toUpperCase() as Color


	const user = await findUser()
	const userId = user.data?.id.toString()

	if (!userId) {
		return { error: 'User login error' }
	}

	try {
		const CategoryData: CategoryData = await db.category.create({
			data: {
				name,
				color,
				userId,
				totalTime: 0
			}
		})
		revalidatePath('/')
		return { data: [CategoryData]}
	} catch (error) {
		return { error: `Error adding category, please try again. ${error}` }
		
	}
}

export default addCategory