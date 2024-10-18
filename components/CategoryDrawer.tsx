'use client'
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer"
import CategoryForm from "./CategoryForm"
import { useState } from 'react'
import { X } from 'lucide-react'

interface CategoryDrawerProps {
	status: "edit" | "add"
	categoryId?: string
}

const CategoryDrawer: React.FC<CategoryDrawerProps> = ({status, categoryId}) => {
	const [open, setOpen] = useState(false)
	const isDesktop = useMediaQuery("(min-width: 768px)")


	if (isDesktop) {
		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					{status === 'add' 
					? (
						<Button variant="outline" >Add Category</Button>
					):(
						<Button variant="outline" data-category-id={categoryId}>Edit</Button>
					)
					}
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
					{status === 'add' 
					? (<>
						<DialogTitle>Add a Category</DialogTitle>
						<DialogDescription>	What would you like to catch time on?</DialogDescription>
						</>
					):(
						<>
						<DialogTitle>Edit Category</DialogTitle>
						<DialogDescription>	Change what you want</DialogDescription>
						</>
					)
					}
						
					</DialogHeader>
					<CategoryForm  status={status} categoryId={categoryId}/>
				<DialogFooter>
					<DialogClose>Cancel</DialogClose>
				</DialogFooter>
				</DialogContent>
			</Dialog>
		)
	}



	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant='outline'>Add Category</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<div className="flex items-center justify-between w-full">
						<DrawerTitle>Add a Category</DrawerTitle>
						<DrawerClose><X /></DrawerClose>
					</div>
					<DrawerDescription>What would you like to catch time on?</DrawerDescription>
				</DrawerHeader>
					<CategoryForm status={'add'}/>
				<DrawerFooter>
					<DrawerClose>
						Cancel
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}

export default CategoryDrawer;