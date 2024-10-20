// ! create goal closes dialog, but create category isn't...

// 'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useForm } from "react-hook-form"
import addCategory from "@/app/actions/addCategory"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { toast } from "@/hooks/use-toast"
import { Color } from "@prisma/client"
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
import React, { useEffect } from "react"
import getCategory from "@/app/actions/getCategory"
import editCategory from "@/app/actions/editCategory"


const formSchema = z.object({
	name: z.string().min(1, {
		message: 'Category name is required'
	}),
	color: z.nativeEnum(Color)
})

interface CategoryFormProps {
	status: 'edit' | 'add'
	categoryId?: string
}


const CategoryForm: React.FC<CategoryFormProps> = ({ status, categoryId }) => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			color: undefined
		}
	})

	useEffect(() => {
		async function fetchCategory() {
			console.log(`status: ${status} categoryId: ${categoryId} categoryForm`)
			if (status === 'edit' && categoryId) {
				const { data, error } = await getCategory(categoryId)
				if (data) {
					console.dir(data)
				}
				if (error) {
					console.log(error)
				}
				form.reset({
					name: data?.name || '',
					color: data?.color || undefined
					
				})
			}

		}
		fetchCategory()
	}, [status, categoryId, form])

	async function handleCreateCategory(data: z.infer<typeof formSchema>) {

		const formData = new FormData()
		formData.append('name', data.name)
		formData.append('color', data.color)
		const result = await addCategory(formData)
		if (result.error) {
			toast({
				variant: "destructive",
				description: `There was a problem with your request.${result.error}`
			})
		}


		if (result.data) {
			toast({
				description: `Category ${result.data[0].name} added successfully!`,
				duration: 4000
			})
			form.reset()
		}
	}

	async function handleUpdateCategory(data: z.infer<typeof formSchema>) {
		if (!categoryId) {
			toast({
				variant: 'destructive',
				description: 'Error updating category'
			})
			return
		}

		const formData = new FormData()
		formData.append('name', data.name)
		formData.append('color', data.color)

		const result = await editCategory(formData, categoryId)
		if (result.error) {
			toast({
				variant: "destructive",
				description: `There was a problem with your request.${result.error}`
			})
		}


		if (result.data) {
			toast({
				description: `Category ${result.data[0].name} added successfully!`,
				duration: 4000
			})
			form.reset()
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={status === 'add' ? form.handleSubmit(handleCreateCategory) : form.handleSubmit(handleUpdateCategory)}
				className="space-y-8">
				{/* Category Name */}
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input placeholder="Category Name" {...field} aria-description="Enter a category name" required />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* Category Color */}
				<FormField
					control={form.control}
					name="color"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Color</FormLabel>
							<FormControl>
								{/*
							Choose theme? other => choose color:
							<input type="color" onValueChange={field.onchange value={field.value} 
							<dataList rainbow=[blue, green, yellow, orange, red, purple, black, white, gray]>
							
							*/}
								<Select onValueChange={field.onChange} required>
									<SelectTrigger >
										{status === 'add' ?
										<SelectValue placeholder="Choose a Color" /> :
										<SelectValue placeholder={field.value}></SelectValue>
									}
									</SelectTrigger>
									<SelectContent >
										<SelectGroup>
											{/* map over colors in theme with values... */}
											<SelectLabel>Colors</SelectLabel>
											
											<SelectItem value="BLUE">Blue</SelectItem>
											<SelectItem value="GREEN">Green</SelectItem>
											<SelectItem value="YELLOW">Yellow</SelectItem>
											<SelectItem value="ORANGE">Orange</SelectItem>
											<SelectItem value="RED">Red</SelectItem>
											<SelectItem value="PURPLE">Purple</SelectItem>
											<SelectItem value="PINK">Pink</SelectItem>
											<SelectItem value="BROWN">Brown</SelectItem>
											<SelectItem value="GREY">Grey</SelectItem>
											<SelectItem value="BLACK">Black</SelectItem>
											<SelectItem value="WHITE">White</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{status === 'edit' ?
					<Button type="submit">SAVE</Button>
					:
					<Button type="submit">ADD</Button>
				}
			</form>
		</Form>
	)
}
export default CategoryForm