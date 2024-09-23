import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";
import { SignInButton } from "@clerk/nextjs";

export default function Home() {
  const user = currentUser()

  if(!user) return <Guest />
  

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    	<h1>Welcome!</h1>
			<p>Please login start catching your time</p>
			<SignInButton />
          </main>
          
          <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            work in progress by Tish Sirface &copy; 2024 <a href="tish-sirface-portfolio.netlify.app">Portfolio</a>
          </footer>
          </div>
        )
}
