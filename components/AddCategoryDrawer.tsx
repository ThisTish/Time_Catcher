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
import AddCategoryForm from "./AddCategoryForm"
import { X } from 'lucide-react'

const AddCategoryDrawer = () => {
	return (
		<Drawer>
			<DrawerTrigger>Add Category</DrawerTrigger>
			<DrawerContent className=" absolute left-3/4">
				<DrawerHeader>
					<div className="flex items-center justify-between w-full">
					<DrawerTitle>Add a Category</DrawerTitle>
					<DrawerClose><X /></DrawerClose>
					</div>
					<DrawerDescription>What would you like to catch time on?</DrawerDescription>
					<AddCategoryForm />
				</DrawerHeader>
				<DrawerFooter>
					<DrawerClose>
						<Button variant="outline">Cancel</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}

export default AddCategoryDrawer;