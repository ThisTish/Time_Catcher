// 'use client'

import { Button } from "./ui/button"
import { ReactEventHandler } from "react"
import { useTimerContext } from "@/hooks/useTimerContext"
import stopTimeLog from "@/app/actions/stopTimeLog"


const StopButton = ({ id, startTime }: { id: string | null; startTime: Date | null }) => {

	const { stopTimer } = useTimerContext()

	const handleStop: ReactEventHandler = async (event) => {
		event.preventDefault()

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
				// make a varient with these classes...except for the scale
			className={`shadow-lg text-lg hover:scale-125 hover:bg-transparent hover:border-2 transition-transform ease-in duration-75 font-mono`} 

			>STOP</Button>
		</div>
	)
}

export default StopButton