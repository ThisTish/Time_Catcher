import { Timer } from "lucide-react"


const TimerDisplay = ({time}: {time: number}) => {

	const hours = Math.floor(time / 3600)
	const minutes = Math.floor((time % 3600) / 60)
	const seconds = Math.floor(time % 60)
	
	const formattedTime = hours > 0 
	? `${hours} : ${(minutes.toString().padStart(2,'0'))} : ${(seconds).toString().padStart(2, '0')}`
	: `${minutes} : ${(seconds).toString().padStart(2, '0')}`


	return (
		<div className=" bg-white bg-opacity-45 text-center rounded p-3 font-bold">
		<p className="text-xl">
			<Timer className="inline mr-3 shadow-lg"/>
			<span>{formattedTime}</span>
		</p>
		</div>
	)
}

export default TimerDisplay
