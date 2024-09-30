'use client'

import { createContext, useContext, useState, ReactNode, FC } from 'react'
import { TimerContextProps, TimerProviderProps } from '@/lib/types'

// Ensure TimerContext is created without the need for an initial value
const TimerContext = createContext<TimerContextProps | undefined>(undefined)



export const TimerProvider: FC<TimerProviderProps> = ({ children }) => {
	const [status, setStatus] = useState<'idle' | 'running'>('idle')
	const [timeLogId, setTimeLogId] = useState<string | null>(null)

	const startTimer = (id: string) => {
		setStatus('running')
		setTimeLogId(id)
	}

	const stopTimer = () => {
		setStatus('idle')
		setTimeLogId(null)
	}

	return (
		<TimerContext.Provider value={{ status, timeLogId, startTimer, stopTimer }}>
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


