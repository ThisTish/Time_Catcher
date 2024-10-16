// 'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useForm } from "react-hook-form"
import  addGoal  from '@/app/actions/addGoal'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { toast } from "@/hooks/use-toast"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectLabel,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/components/ui/form"
import GoalTimeSlider from "./GoalTimeSlider"
import { useEffect } from "react"
import getGoal from "@/app/actions/getGoal"
import editGoal from "@/app/actions/editGoal"



const formSchema = z.object({
	name: z.string().max(25, {
		message: 'You only get 25 characters here!'
	}),
	targetTime: z.number().gt(15, {
		message: 'You want to make a goal less than 15 minutes?!'
	}),
	period: z.enum(['DAY', 'WEEK', 'MONTH', 'SEASON', 'YEAR'])
})

interface GoalFormProps {
	status: 'edit' | 'add'
	goalId?: string
	categoryId?: string
}

const GoalForm: React.FC<GoalFormProps> = ({status, goalId, categoryId }) => {

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			targetTime: 15,
			period: 'DAY'
		}
	})

	useEffect(() =>{
		async function fetchGoal(){
			if(status === 'edit' && goalId){
				const { data, error } = await getGoal(goalId)
				if(error) console.log(error)

			form.reset({
				name: data?.name || '',
				targetTime: data?.targetTime || 15,
				period: data?.period || 'DAY'
			})
			}
		}
		fetchGoal()
	}, [status, goalId])
	// create editCategory function
	async function handleUpdateGoal(data: z.infer<typeof formSchema>){
		if(!goalId){
			toast({
				variant: 'destructive',
				description: 'Error getting Goal info'
			})
			return
		}

		const formData = new FormData()
		formData.append('name', data.name)
		formData.append('targetTime', data.targetTime.toString())
		formData.append('period', data.period)

		const result = await editGoal(formData, goalId)
		if(result.error){
			toast({
				variant: 'destructive',
				description: `Problem updating goal ${result.error}`
			})
		}
		if(result.data){
			toast({
				description: `Goal was successfully updated`,
				duration: 4000
			})
			form.reset()
		}
	}

	async function handleCreateGoal(data: z.infer<typeof formSchema>) {

		const formData = new FormData()
		formData.append('name', data.name)

		const stringTargetTimeMs = Math.floor(data.targetTime * 60000).toString()
		formData.append('targetTime', stringTargetTimeMs)
		if (categoryId) {
			formData.append('categoryId', categoryId)
		}
		formData.append('period', data.period)
		// console.log(stringTargetTimeMs)
		const result = await addGoal(formData);
		if (result.error) {
			toast({
				variant: "destructive",
				title: `There was a problem trying to add your goal.`,
				description: `${result.error}`,
				duration: 4000
			})
		}

		if (result.data) {
			toast({
				description: `Goal ${data.name} added successfully!`,
				duration: 4000
			})
			form.reset()
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(handleCreateGoal)} className="space-y-8">
				{/* Goal Name */}
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input placeholder="Goal Name" {...field} aria-description="Enter a goal name" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* Goal Period */}
				<FormField
					control={form.control}
					name="period"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Period</FormLabel>
							<FormControl>
								<Select onValueChange={field.onChange} value={field.value}>
									<SelectTrigger >
										<SelectValue placeholder="Choose a Time Period" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Periods</SelectLabel>
											<SelectItem value="DAY">Day</SelectItem>
											<SelectItem value="WEEK">Week</SelectItem>
											<SelectItem value="MONTH">Month</SelectItem>
											<SelectItem value="SEASON" disabled>Season</SelectItem>
											<SelectItem value="YEAR">Year</SelectItem>
											{/* <SelectItem value="other">other?</SelectItem> adds an input for a date */}0
										</SelectGroup>
									</SelectContent>
								</Select>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
					{/* Goal Time */}
					<FormField
						control={form.control}
						name="targetTime"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Set Target Time</FormLabel>
								<FormControl>
								<GoalTimeSlider value={field.value} onChange={field.onChange} />
									
									{/* <Input type="number" placeholder="Goal Target Time" {...field} aria-description="Enter a goal target time" required /> */}
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				<Button type="submit">CREATE</Button>
			</form>
		</Form>
	)
}
export default GoalForm