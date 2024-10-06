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
import { Button } from "@/components/ui/button"
import { X } from 'lucide-react'
import AddGoalForm from "./AddGoalForm"

const AddGoalDrawer = ({categoryId}: {categoryId: string}) => {
	return ( 

		<Drawer>
		<DrawerTrigger>Add Goal</DrawerTrigger>
		<DrawerContent className=" absolute left-3/4" data-category-id={categoryId} >
			<DrawerHeader>
				<div className="flex items-center justify-between w-full">
				<DrawerTitle>Make a Goal</DrawerTitle>
				<DrawerClose><X /></DrawerClose>
				</div>
			</DrawerHeader>
			<AddGoalForm categoryId={categoryId}/>
			<DrawerFooter>
				<DrawerClose>
					<Button variant="outline">Cancel</Button>
				</DrawerClose>
			</DrawerFooter>
		</DrawerContent>
	</Drawer>
	)
}
 
export default AddGoalDrawer


	
