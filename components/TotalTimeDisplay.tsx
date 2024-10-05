

const TotalTimeDisplay = ({totalTime}: {totalTime: number}) => {

	const msTotalTime = totalTime/1000
	const hours = Math.floor(msTotalTime / 3600)
	const minutes = Math.floor((msTotalTime % 3600) / 60)
	const seconds = Math.floor(msTotalTime % 60)

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