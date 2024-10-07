import { timeFormat } from "@/lib/utils"


const TotalTimeDisplay = ({ totalTime }: { totalTime: number }) => {

	const msTotalTime = totalTime / 1000
	const { hours, minutes, seconds } = timeFormat(msTotalTime)

	const formattedTime = hours > 0
		? `${hours}h ${minutes}m ${seconds}s`
		: `${minutes}m ${seconds}s`

	return (
		<>
			{totalTime > 0 ?
				<p>{formattedTime}</p> :
				<p>----</p>
			}
		</>
	)
}

export default TotalTimeDisplay;