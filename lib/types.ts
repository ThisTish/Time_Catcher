import { Color } from "@prisma/client"
import { User } from "@prisma/client"

export interface CategoryData {
	name: string
	color: Color
	userId: string
	totalTime: number
	id: string
}

export interface CategoryResult {
	data?: CategoryData[]
	error?: string
}


export interface TimeLogData {
	userId: string
	categoryId: string
	startTime?: Date
	timePassed?: number
}

export interface TimeLogResult {
	data?: TimeLogData
	error?: string
}

export interface UserResult {
	data?: User
	error?: string
}

