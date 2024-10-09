import { db } from "@/lib/db"
import { TimeLogResult } from "@/lib/types"
import findUser from "./findUser"

const getCurrentTimer = async (): Promise<TimeLogResult> => {
	const userId = (await findUser()).data?.id.toString()

	if (!userId) {
		return { error: 'User login error' }
	}

	const currentTimeLog = await db.timeLog.findFirst({
		where: {
			userId,
			endTime: null
		}
	})

	if (!currentTimeLog) return { error: 'No timer running' }

	return { data: currentTimeLog }

}

export default getCurrentTimer