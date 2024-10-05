'use server'
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"


const deleteCategory = async ({ categoryName }: { categoryName: string }) => {

	try {
		const deletedCategory = await db.category.delete({
			where: {
				name: categoryName
			}
		})

		revalidatePath('/')
		return { data: deletedCategory}

	} catch (error) {
		return { error: `There has been an error: ${error}` }
	}
}

export default deleteCategory