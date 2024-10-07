import { ReactEventHandler } from "react"
import { Button } from "./ui/button"
import startTimeLog from "@/app/actions/startTimeLog"
import { useTimerContext } from "@/hooks/useTimerContext"
import { Color } from "@prisma/client"




const StartButton = ({categoryId, disabled, color}: {categoryId: string; disabled?: boolean; color: Color}) => {
	const { startTimer} = useTimerContext()

	const handleStart: ReactEventHandler = async (event) => {
		event.preventDefault()

		try{
			const result = await startTimeLog({ id: categoryId})
			if(result.error){
				return console.log('error with startTime creation/info')
			}
			if(result.data){
				const timeLogId = result.data.id
				console.log('starting with timelog and category id',timeLogId, categoryId)
				startTimer(timeLogId, categoryId)
			}
		}catch(error){
			console.log(error)
		}
	}
	
	return (
		<Button
			// variant={"secondary"}
			className={`shadow-lg text-lg bg-white text-${color.toLowerCase()} font-bold hover:scale-90 hover:bg-transparent hover:border-2 transition-transform ease-in duration-75`} 
			onClick={handleStart}
			disabled={disabled}
			>
			START
		</Button>

	)
}

export default StartButton;