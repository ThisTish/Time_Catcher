import { auth } from "@clerk/nextjs/server"
import { db } from "@/lib/db"
import { UserResult } from "@/lib/types"

export default async function findUser(): Promise<UserResult> {

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


	return { data: user }

}