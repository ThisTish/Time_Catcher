import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import GoalDrawer from "./GoalDrawer";
// import DeleteGoalButton from "./DeleteGoalButton"

const GoalDropdownMenu = ({goalId}: {goalId: string}) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>...</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>Actions</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem asChild>
					<GoalDrawer status={'edit'} goalId={goalId}/>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					{/* <DeleteGoalButton goalId={goalId} /> */}
				</DropdownMenuItem>
				<DropdownMenuItem>Mark Completed</DropdownMenuItem>
				<DropdownMenuItem>Add Time</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default GoalDropdownMenu