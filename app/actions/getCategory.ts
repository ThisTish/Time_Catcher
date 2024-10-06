'use server'
import { db } from "@/lib/db"
import { CategoryData, CategoryResult } from "@/lib/types"


async function getCategory(id: string): Promise<CategoryResult> {


	try {
		const category = await db.category.findUnique({
			where: {
				id: id
			}
		})
console.log(JSON.stringify(category))
		if (!category) {
			return { error: 'Error happened trying to find that category' }
		}

		return { data: category }
	} catch (error) {

		return { error: `Error finding category, please try again. ${error}` }

	}
}

export default getCategory