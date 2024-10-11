import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import DeleteCategoryButton from "./DeleteCategoryButton"

const GoalDropdownMenu = ({categoryId, categoryName}: {categoryId: string, categoryName: string}) => {
	return (
		<DropdownMenu >
			<DropdownMenuTrigger>...</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>Actions</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Edit</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<DeleteCategoryButton categoryId={categoryId} categoryName={categoryName} />
				</DropdownMenuItem>
				<DropdownMenuSeparator>
				<DropdownMenuItem>See Details</DropdownMenuItem>
				</DropdownMenuSeparator>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default GoalDropdownMenu