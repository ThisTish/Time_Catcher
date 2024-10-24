import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Link from "next/link";
import { checkUser } from "@/lib/checkUser"
import CategoryDrawer from "@/components/CategoryDrawer"
import AddGoalDrawer from "./GoalDrawer"
import { Clock } from 'lucide-react'


const NavBar = () => {
	const user = checkUser()

	return (
		<>
			<header className="flex justify-between items-center w-full py-9 fixed bg-opacity-80 backdrop-blur-sm z-50 shadow-md shadow-sky-400  bg-sky-300 px-3">
				<Link href={"/"}><h1 className="text-5xl font-semibold font-sans pt-6 tracking-tight text-stone-700 p-5 rounded-md bg-opacity-55 relative">TimeCatcher</h1></Link>
				<Clock className="absolute left-32 size-8 -z-10 text-stone-600 font-extralight"/>
				<nav className="flex gap-3 justify-center items-center text-sm">
					<SignedOut>
					<div className="bg-stone-100 text-sky-600 rounded-md px-2 py-1 text-lg border-2 border-sky-600 hover:bg-transparent hover:text-stone-100 hover:scale-110 transition-all ease-in">
						<SignInButton />
						</div>
					</SignedOut>
					<SignedIn>
						{/* <SignOutButton /> */}
						<CategoryDrawer status={'add'} />
						{/* <AddGoalDrawer status={'add'} /> */}
						<UserButton appearance={{elements: {avatarBox: 'size-10'} }}/>
					</SignedIn>
					</nav>
			</header>
		</>

	);
}

export default NavBar;