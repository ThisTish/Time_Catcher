
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const Guest = () => {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<h1 className="text-6xl">Feel like you're losing time!?</h1>
				<p>Track your time with custom timers, make goals for categories or tasks, </p>
				<p>and start catching your time to start making the best of it </p>
				<div className="flex gap-3">
				<Button variant={"secondary"}>
				<SignInButton />
				</Button>
				<Button >
				<SignUpButton />
				</Button>
				</div>
			</main>
		</div>
	);
}

export default Guest;