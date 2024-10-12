// // 'use client'
// import { XIcon } from 'lucide-react'
// import {
// 	AlertDialog,
// 	AlertDialogAction,
// 	AlertDialogCancel,
// 	AlertDialogContent,
// 	AlertDialogDescription,
// 	AlertDialogFooter,
// 	AlertDialogHeader,
// 	AlertDialogTitle,
// 	AlertDialogTrigger,
// } from "@/components/ui/alert-dialog"
// import { toast } from '@/hooks/use-toast'
// import deleteGoal from '@/app/actions/deleteGoal'

// const DeleteGoalButton= ({goalId}: {goalId: string}) => {

// 	const handleDelete = async () =>{
// 		const result = await deleteGoal({goalId})
// 		if(result.error){
// 			console.log(result.error)
// 			toast({
// 				variant: 'destructive',
// 				description: `Error: ${result.error}`,
// 				duration: 6000
// 			})
// 		}

// 		if(result.data){
// 		toast({
// 			description: `Goal deleted successfully!`,
// 			duration: 4000
// 		})

// 	}
// 	}

// 	return (

// 		<AlertDialog >
// 			<AlertDialogTrigger>
// 				Delete
// 			</AlertDialogTrigger>
// 			<AlertDialogContent>
// 				<AlertDialogHeader>
// 					<AlertDialogTitle>Delete this Goal???</AlertDialogTitle>
// 					<AlertDialogDescription>
// 						All info will be removed for this goal!
// 					</AlertDialogDescription>
// 				</AlertDialogHeader>
// 				<AlertDialogFooter>
// 					<AlertDialogCancel>Cancel</AlertDialogCancel>
// 					<AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
// 				</AlertDialogFooter>
// 			</AlertDialogContent>
// 		</AlertDialog >

// 	)
// }

// export default DeleteGoalButton