
// ? get current timeLog by:
// ? const currentTimeLog = await db.timeLog.findFirst({
//?     where:{
//?        startTime has Date,
// ?       endTime: null
// ?} })

// ? if currenttimeLog=> set status running, setTimeLogId, setCategoryId setStartTime
// ? else timerProvider is at default
'use client'

import { createContext, useContext, useState, FC, useEffect } from 'react'
import { TimerContextProps, TimerProviderProps } from '@/lib/types'


const TimerContext = createContext<TimerContextProps | undefined>(undefined)

export const TimerProvider: FC<TimerProviderProps> = ({ children, ongoingTimer }) => {
	const [status, setStatus] = useState<'idle' | 'running'>('idle')
	const [timeLogId, setTimeLogId] = useState<string | null>(null)
	const [categoryId, setCategoryId] = useState<string | null>(null)
	const [startTime, setStartTime] = useState<Date | null>(null)
	const [timePassed, setTimePassed] = useState<number>(0)

	useEffect(() =>{
		if(ongoingTimer){
		setStatus('running')
		setTimeLogId(ongoingTimer.id)
		setCategoryId(ongoingTimer.categoryId)
		setStartTime(ongoingTimer.startTime)
		setTimePassed(ongoingTimer.timePassed)
		}
		console.log('ongoingTimer?.id',ongoingTimer?.id)
	},[ongoingTimer])



	const startTimer = (timeLogId: string, categoryId: string) => {
		setStatus('running')
		setTimeLogId(timeLogId)
		setCategoryId(categoryId)
		setStartTime(new Date())
	}

	const stopTimer = () => {
		setStatus('idle')
		setTimeLogId(null)
		setCategoryId(null)
		setStartTime(null)

	}

	return (
		<TimerContext.Provider value={{ status, timeLogId, categoryId, startTime, startTimer, stopTimer }}>
			{children}
		</TimerContext.Provider>
	)
}

export const useTimerContext = (): TimerContextProps => {
	const context = useContext(TimerContext)
	if (!context) {
		throw new Error('useTimerContext must be used within a TimerProvider')
	}
	return context
}


