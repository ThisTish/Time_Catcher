import { Timer } from "lucide-react"
import { timeFormat } from "@/lib/utils"

// *if loading, blur...

const TimerDisplay = ({time}: {time: number}) => {
	const { hours, minutes, seconds } = timeFormat(time)
	
	
	const formattedTime = hours > 0 
	? `${hours} : ${(minutes.toString().padStart(2,'0'))} : ${(seconds).toString().padStart(2, '0')}`
	: `${minutes} : ${(seconds).toString().padStart(2, '0')}`


	return (
		<div className=" bg-white bg-opacity-45 text-center rounded p-3">
		<p className="text-xl">
			<Timer className="inline mr-3 shadow-lg "/>
			<span className="tabular-nums">{formattedTime}</span>
		</p>
		</div>
	)
}

export default TimerDisplay
