import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Link from "next/link";

const NavBar = () => {
	return (
		<>
			<div className="drawer drawer-end">
				<input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col">
					{/* Navbar */}
					<div className="navbar bg-base-300 w-full">
						<div className="mx-2 flex-1 px-2">
						<Link href='/' className="btn btn-secondary text-light text-xl">Time Catcher</Link>
						</div>
						<div className="flex-none">
							<SignedOut>
									<button className="btn btn-warning text-light"><SignInButton /></button>
							</SignedOut>
						</div>
						<SignedIn>
						<div className="flex-none lg:hidden">
							<label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-warning text-light">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									className="inline-block h-6 w-6 stroke-current">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"></path>
								</svg>
							</label>
						</div>
						<div className="hidden flex-none lg:block">
							<ul className="menu menu-horizontal text-primary-content">
								{/* Navbar menu content here */}
									<li className="hover:bg-secondary hover:text-light hover:text-lg"><Link href='/'>Home</Link></li>
									<li className="hover:bg-secondary hover:text-light hover:text-lg"><Link href='/dashboard'>Dashboard</Link></li>
									<li className="hover:bg-secondary hover:text-light hover:text-lg"><SignOutButton /></li>
									<li className="hover:bg-secondary hover:text-light hover:text-lg"><UserButton /></li>
							</ul>
						</div>
								</SignedIn>
					</div>
					
				</div>
				<div className="drawer-side">
					<label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
					<ul className="menu bg-base-200 min-h-full w-80 p-4 space-y-4 text-primary-content ">
						{/* Sidebar content here */}
						<SignedOut>
							<li>
								<SignInButton />
							</li>
						</SignedOut>
						<SignedIn>
							<li className="hover:bg-secondary self-end"><UserButton appearance={{elements:{avatarBox:'size-10'}}}/></li>
							<li className="hover:bg-secondary hover:text-light hover:text-lg"><Link href='/'>Home</Link></li>
							<li className="hover:bg-secondary hover:text-light hover:text-lg"><Link href='/dashboard'>Dashboard</Link></li>
							<li className="hover:bg-secondary hover:text-light hover:text-lg"><SignOutButton /></li>
						</SignedIn>
					</ul>
				</div>
			</div>
		</>

	);
}

export default NavBar;