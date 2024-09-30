'use client'

import { Button } from "./ui/button"
import { ReactEventHandler } from "react"
import { useTimerContext } from "@/hooks/useTimerContext"


const StopButton = ({id}: {id: string | null}) => {

	const { stopTimer} = useTimerContext()
	

	const handleStop: ReactEventHandler = (event) => {
		event.preventDefault()
		console.log(id)
		stopTimer()
		console.log(id)
	}

	return (
		<div>
			<Button 
			onClick={handleStop}
			data-timelog-id = {id}
			>Stop</Button>
		</div>
	)
}

export default StopButton