'use server'
import { auth, User } from "@clerk/nextjs/server"
import { db } from "@/lib/db"
import { Color } from "@prisma/client"



interface CategoryData {
	name: string
	color: Color
	userId: string
}

interface CategoryResult {
	data?: CategoryData
	error?: string
}

async function addCategory(formData: FormData): Promise<CategoryResult> {
	const nameValue = formData.get('name')
	const colorValue = formData.get('color')

	if(!nameValue || nameValue === ''){
		return { error: 'Category name is required' }
	}
	if(!colorValue || colorValue === ''){
		return { error: 'Category color is required' }
	}


	const name: string = nameValue.toString()
	const color: Color = colorValue.toString().toUpperCase() as Color

	const { userId } = auth()

	if(!userId){
		return { error: 'Error with your account, please log back in to try again.' }
	}
	const user = await db.user.findUnique({
		where:{
			clerkUserId: userId
		}
	})
	if(!user){
		return { error: 'Error with your account, please log back in to try again.' }
	}
	const { id } = user
	console.log(color)

	try {
		const CategoryData: CategoryData = await db.category.create({
			data: {
				name,
				color,
				userId: id,
				totalTime: 0
			}
		})
		return { data: CategoryData}
	} catch (error) {
		return { error: `Error adding category, please try again. ${error}` }
		
	}
}

export default addCategory