import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Link from "next/link";
import { checkUser } from "@/lib/checkUser"
import CategoryDrawer from "@/components/CategoryDrawer"
import AddGoalDrawer from "./GoalDrawer"


const NavBar = () => {
	const user = checkUser()

	return (
		<>
			<header className="flex justify-between items-center w-full py-9 fixed bg-secondary px-3">
				<Link href={"/"}><h1 className="text-3xl">TimeCatcher</h1></Link>
				<nav className="flex gap-3 justify-center items-center text-sm">
					<SignedOut>
						<SignInButton />
					</SignedOut>
					<SignedIn>
						{/* <SignOutButton /> */}
						<CategoryDrawer status={'add'} />
						<AddGoalDrawer categoryId=""/>
						<UserButton appearance={{elements: {avatarBox: 'size-10'} }}/>
					</SignedIn>
					</nav>
			</header>
		</>

	);
}

export default NavBar;