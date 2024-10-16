'use client'

import { useMediaQuery } from "@/hooks/use-media-query"
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import { X } from 'lucide-react'
import GoalForm from "./GoalForm"

interface GoalDrawerProps { 
	status: 'edit' | 'add'
	goalId?: string
	categoryId?: string
}

const GoalDrawer: React.FC<GoalDrawerProps> = ({status, goalId, categoryId}) =>{

	const [open, setOpen] = useState(false)
	const isDesktop = useMediaQuery("(min-width: 768px)")

	if (isDesktop) {
		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					{status === 'add' 
					?  <Button variant="ghost">Add Goal</Button> 
					: <Button variant='ghost'>Edit</Button>
					}
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]" data-category-id={categoryId}>
					<DialogHeader>
						{status === 'add' 
						? <DialogTitle>Make a Goal</DialogTitle>
						: <DialogTitle>Edit Goal</DialogTitle>
						}
					</DialogHeader>
					<GoalForm status={status} goalId={goalId} categoryId={categoryId} />
					<DialogFooter>
						<DialogClose asChild>
							<Button variant="outline">Cancel</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		)
	}


	return (

		<Drawer>
			<DrawerTrigger asChild>
				<Button variant='ghost'>Add Goal</Button>
			</DrawerTrigger>
			<DrawerContent data-category-id={categoryId} >
				<DrawerHeader>
					<div className="flex items-center justify-between w-full">
						<DrawerTitle>Make a Goal</DrawerTitle>
						<DrawerClose><X /></DrawerClose>
					</div>
				</DrawerHeader>
					<GoalForm status={status} goalId={goalId} categoryId={categoryId} />
				<DrawerFooter>
					<DrawerClose asChild>
						<Button variant="outline">Cancel</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}

export default GoalDrawer

