'use client'

import { Button } from "./ui/button"
import { ReactEventHandler } from "react"
import { useTimerContext } from "@/hooks/useTimerContext"
import stopTimeLog from "@/app/actions/stopTimeLog"


const StopButton = ({ id, startTime }: { id: string | null; startTime: Date | null }) => {

	const { stopTimer, status, timeLogId } = useTimerContext()

	const handleStop: ReactEventHandler = async (event) => {
		event.preventDefault()
		console.log(id, status, timeLogId)

		if (id !== null) {
			try {
				const result = await stopTimeLog({ id, startTime })
				if (result.error) {
					return console.log('error with startTime creation/info')
				}
				if (result.data) {
					console.log(`Success?!${JSON.stringify(result.data)}`)
					stopTimer()
					
				}
			} catch (error) {
				console.log(error)
			}
		}
	}

	return (
		<div>
			<Button
				onClick={handleStop}
				data-timelog-id={id}
				data-start-time={startTime}
			>Stop</Button>
		</div>
	)
}

export default StopButton