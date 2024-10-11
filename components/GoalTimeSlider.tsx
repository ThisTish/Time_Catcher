'use client';

import { DualRangeSlider } from '@/components/ui/dual-range-slider'
import { Goal } from "@prisma/client";
import { useEffect, useState } from "react"

interface GoalTimeSliderProps {
	value: number;
	onChange: (value: number) => void;
}

const GoalTimeSlider: React.FC<GoalTimeSliderProps> = ({ value, onChange }) => {
	const [time, setTime] = useState(value); // time in minutes

	const handleGoalTime = (value: number[]) => {
		setTime(value[0])
		onChange(value[0])
	}

	useEffect(() =>{
		setTime(value)
	}, [value])
	// console.log(time)
	const hours = Math.floor(time / 60)
	const minutes = time % 60

	// console.log(`hours ${hours} minutes: ${minutes}`)
	return (
		<>
				<DualRangeSlider
				value={[time]}
				onValueChange={handleGoalTime}
				min={15}
				max={3600}
				step={15}
			/>

			<p>{hours}hrs {minutes}min</p>
		</>

	)
}

export default GoalTimeSlider