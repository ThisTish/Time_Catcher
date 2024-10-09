import { Color, Goal, Period } from "@prisma/client"
import { User } from "@prisma/client"
import { ReactNode } from "react"

export interface CategoryData {
	name: string
	color: Color
	userId: string
	totalTime: number
	id: string
	goals?: Goal[]
}
export interface CategoryResult {
	data?: CategoryData
	error?: string
}

export interface CategoryResults {
	data?: CategoryData[] 
	error?: string 
}


export interface TimeLogData {
	id: string
	userId: string
	categoryId: string
	startTime: Date | null
	endTime: Date | null
	timePassed: number
	status?: 'idle' | 'running'
}

export interface TimeLogResult {
	data?: TimeLogData
	error?: string
}
export interface TimeLogResults {
	data?: TimeLogData[]
	error?: string
}

export interface UserResult {
	data?: User
	error?: string
}


export interface TimerContextProps {
	status: 'idle' | 'running'
	timeLogId: string | null
	categoryId: string | null
	startTime: Date | null
	startTimer: (timeLogId: string, categoryId: string) => void
	stopTimer: () => void
}

export interface TimerProviderProps {
	children: ReactNode
	ongoingTimer: TimeLogData | null

}

export interface CategoryCardProps {
	id: string
	name: string
	color: Color
	totalTime: number
	goals?: Goal[]
}

export interface GoalCardProps {
	id: string
	name?: string | null
	targetTime: number
	period: Period
	completed?: Boolean | null
	categoryId: string
}