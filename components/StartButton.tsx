import { ReactEventHandler } from "react"
import { Button } from "./ui/button"
import startTimeLog from "@/app/actions/startTimeLog"
import { useTimerContext } from "@/hooks/useTimerContext"




const StartButton = ({categoryId}: {categoryId: string}) => {
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
				console.log(timeLogId)
				startTimer(timeLogId)
			}
		}catch(error){
			console.log(error)
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

	)
}

export default StartButton;