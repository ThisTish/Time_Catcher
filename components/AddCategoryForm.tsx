'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useForm } from "react-hook-form"
import addCategory from "@/app/actions/addCategory"
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
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/components/ui/form"


const formSchema = z.object({
	name: z.string().min(1, {
		message: 'Category name is required'
	}),
	color: z.enum(["WHITE", "BLUE", "GREEN", "YELLOW", "ORANGE", "RED", "PURPLE", "PINK", "BROWN", "GREY", "BLACK"])
})


const AddCategoryForm = () => {

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			color: undefined
		}
	})

	async function handleSubmitCategory(data: z.infer<typeof formSchema>) {

		const formData = new FormData();
		formData.append('name', data.name);
		formData.append('color', data.color);
		const result = await addCategory(formData);
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
		<form onSubmit={form.handleSubmit(handleSubmitCategory)} className="space-y-8">
			{/* Category Name */}
			<FormField
				control={form.control}
				name="name"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Name</FormLabel>
						<FormControl>
							<Input placeholder="Category Name" {...field} aria-description="Enter a category name" />
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
							<Select onValueChange={field.onChange} value={field.value}>
								<SelectTrigger >
									<SelectValue placeholder="Choose a Color" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
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
			<Button type="submit">ADD</Button>
		</form>
	</Form>
)
}
export default AddCategoryForm;