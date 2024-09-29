'use client'
import { ReactEventHandler, use } from "react"
import { Button } from "./ui/button"
import { TimeLogData } from "@/lib/types"
import { TimeLogResult } from "@/lib/types"
import startTimeLog from "@/app/actions/startTimeLog"




const StartButton = ({categoryId}: {categoryId: string}) => {


	const handleStart: ReactEventHandler = async (event) => {
		event.preventDefault()
		
		const { data, error } = await startTimeLog({id: categoryId})

		if (error) {
			console.error(error)
		} else {
			console.dir(data, { colors: true })
		}


	}
	
	return (
		<Button
			variant={"secondary"}
			className={`text-black shadow-lg hover:shadow-none hover:scale-90 transition-transform ease-in duration-75 active:opacity-0`} 
			onClick={handleStart}
			>
			Start
		</Button>

	);
}

export default StartButton;