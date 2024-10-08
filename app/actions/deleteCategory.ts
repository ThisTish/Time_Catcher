'use server'
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"


const deleteCategory = async ({ categoryId }: { categoryId: string }) => {

	try {
		const deletedCategory = await db.category.delete({
			where: {
				id: categoryId
			}
		})

		revalidatePath('/')
		return { data: deletedCategory}

	} catch (error) {
		return { error: `There has been an error: ${error}` }
	}
}

export default deleteCategory