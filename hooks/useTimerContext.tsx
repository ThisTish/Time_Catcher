'use client'

import { createContext, useContext, useState, ReactNode, FC, use } from 'react'
import { TimerContextProps, TimerProviderProps } from '@/lib/types'

// Ensure TimerContext is created without the need for an initial value
const TimerContext = createContext<TimerContextProps | undefined>(undefined)



export const TimerProvider: FC<TimerProviderProps> = ({ children }) => {
	const [status, setStatus] = useState<'idle' | 'running'>('idle')
	const [timeLogId, setTimeLogId] = useState<string | null>(null)
	const [categoryId, setCategoryId] = useState<string | null>(null)

	const startTimer = (timeLogId: string, categoryId: string) => {
		setStatus('running')
		setTimeLogId(timeLogId)
		setCategoryId(categoryId)
	}

	const stopTimer = () => {
		setStatus('idle')
		setTimeLogId(null)
		setCategoryId(null)

	}

	return (
		<TimerContext.Provider value={{ status, timeLogId, categoryId, startTimer, stopTimer }}>
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


