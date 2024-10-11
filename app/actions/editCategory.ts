import { db } from "@/lib/db"
import { Color } from "@prisma/client"
import { CategoryData, CategoryResults } from "@/lib/types"
import { revalidatePath } from "next/cache"


async function editCategory(formData: FormData, categoryId: string): Promise<CategoryResults> {

	const nameValue = formData.get('name')
	const colorValue = formData.get('color')

	if(!nameValue || nameValue === '' || !colorValue || colorValue === ''){
		return { error: 'Category name & color are required' }
	}
	
	const name: string = nameValue.toString()
	const color: Color = colorValue.toString().toUpperCase() as Color


	try {
		const CategoryData: CategoryData = await db.category.update({
			where:{
				id: categoryId
			},
			data:{
				name,
				color
			}
		})
		revalidatePath('/')
		return { data: [CategoryData]}
	} catch (error) {
		return { error: `Error adding category, please try again. ${error}` }
		
	}
}

export default editCategory