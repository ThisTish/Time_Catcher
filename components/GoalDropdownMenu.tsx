import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const GoalDropdownMenu = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>...</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>Actions</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Edit</DropdownMenuItem>
				<DropdownMenuItem>Delete</DropdownMenuItem>
				<DropdownMenuItem>Mark Completed</DropdownMenuItem>
				<DropdownMenuItem>Add Time</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default GoalDropdownMenu