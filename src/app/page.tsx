import { type Metadata } from "next"
import { MainNav } from "@/components/molecules/main-nav"
import { UserNav } from "@/components/molecules/user-nav"
import { getServerAuthSession } from "@/server/auth"
import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link"
import { CoffeeIcon, GroupIcon, HeartIcon, PlaneIcon, PowerIcon, WifiIcon } from "lucide-react"
import dynamic from "next/dynamic"
import { EmailList } from "./_components/email-list"
import CafeMap from "@/components/molecules/map";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
}
const SignInButton = dynamic(() => import('@/components/atoms/SignInButton'), {
  ssr: false,
});
export default async function DashboardPage() {
  noStore();
  const session = await getServerAuthSession();

  return (
    <>
      <div className="flex flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
          <p className="text-lg font-bold tracking-tighter sm:text-xl md:text-2xl">CoWoCafe</p>
            {/* <TeamSwitcher /> */}
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              {/* <Search /> */}
              {session ?(
              <UserNav session={session} />
              ):(
                <SignInButton></SignInButton>
              )}
            </div>
          </div>
        </div>
        <main className="flex-1">
        <CafeMap lat={50.933594} lng={6.961899} zoom={12} />
        <section className="w-full py-12 md:py-16 lg:py-20 xl:py-24">
          <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work together, anywhere</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The platform for remote collaboration. Access a global network of workspaces, connect with like-minded
                professionals, and supercharge your productivity.
              </p>
            </div>
            
            <SignInButton></SignInButton>
          </div>
        </section>
        <section className="w-full py-12 md:py-16 lg:py-20 xl:py-24 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Discover Your Next Workspace</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Find the perfect cafe for your workday. Enjoy high-speed WiFi, ample power outlets, and a community of like-minded individuals, all while sipping your favorite coffee.
              </p>
            </div>
            <div className="mx-auto w-full max-w-2xl grid gap-4 lg:max-w-5xl lg:grid-cols-3 lg:gap-6">
              <div className="flex flex-col items-center space-y-2">
                <WifiIcon className="w-12 h-12 rounded-lg bg-gray-100 p-3 dark:bg-gray-800" />
                <h3 className="text-xl font-bold">Stay Connected</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Reliable, high-speed WiFi for all your work needs</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <PowerIcon className="w-12 h-12 rounded-lg bg-gray-100 p-3 dark:bg-gray-800" />
                <h3 className="text-xl font-bold">Power Up</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Ample power outlets to keep your devices charged</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <CoffeeIcon className="w-12 h-12 rounded-lg bg-gray-100 p-3 dark:bg-gray-800" />
                <h3 className="text-xl font-bold">Enjoy Coffee</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Savor your favorite drinks while you work</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <GroupIcon className="w-12 h-12 rounded-lg bg-gray-100 p-3 dark:bg-gray-800" />
                <h3 className="text-xl font-bold">Join the Community</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Connect with fellow remote workers and freelancers</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <HeartIcon className="w-12 h-12 rounded-lg bg-gray-100 p-3 dark:bg-gray-800" />
                <h3 className="text-xl font-bold">Work in Comfort</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Choose a space that suits your work style</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <PlaneIcon className="w-12 h-12 rounded-lg bg-gray-100 p-3 dark:bg-gray-800" />
                <h3 className="text-xl font-bold">Work and Travel</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Travel freely knowing you will always have a desk</p>
              </div>
            </div>
          </div>
        </section>
      
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} CoWoCafe All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
      </div>
    </>
  );
}
