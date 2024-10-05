const TimerDisplay = ({time}: {time: number}) => {

	const hours = Math.floor(time / 3600)
	const minutes = Math.floor((time % 3600) / 60)
	const seconds = Math.floor(time % 60)
	
	const formattedTime = hours > 0 
	? `${hours} : ${minutes} : ${(seconds).toString().padStart(2, '0')}`
	: `${minutes} : ${(seconds).toString().padStart(2, '0')}`


	return (
		<p className="p-1 px-2 mb-3 bg-white bg-opacity-55 rounded ">
			{formattedTime}
		</p>
	);
}

export default TimerDisplay
