import { type Metadata } from "next";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TeamSwitcher from "@/components/molecules/team-switcher";
import { MainNav } from "@/components/molecules/main-nav";
import { Search } from "@/components/molecules/search";
import { UserNav } from "@/components/molecules/user-nav";
import { Overview } from "@/components/molecules/overview";
import { RecentSales } from "@/components/molecules/recent-sales";
import { CalendarDateRangePicker } from "@/components/molecules/date-range-picker";
import { getServerAuthSession } from "@/server/auth";
import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { AccessibilityIcon, ActivityLogIcon } from "@radix-ui/react-icons";
import { MergeIcon, UserIcon, VideoIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};

export default async function DashboardPage() {
  noStore();
  const session = await getServerAuthSession();

  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              {session ? (
                <UserNav />
              ) : (
                <Link href={session ? "/api/auth/signout" : "/api/auth/signin"}>
                  <Button>Sign in</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
              <div className="space-y-2 text-center">
                <h1 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Work together, anywhere
                </h1>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The platform for remote collaboration. Access a global network
                  of workspaces, connect with like-minded professionals, and
                  supercharge your productivity.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Sign Up</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Sign up to get notified when we launch.
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  The Future of Work
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Experience the benefits of coworking, from increased
                  productivity to expanded networks, from the comfort of your
                  home.
                </p>
              </div>
              <div className="mx-auto grid w-full max-w-2xl gap-4 lg:max-w-5xl lg:grid-cols-3 lg:gap-6">
                <div className="flex flex-col items-center space-y-2">
                  <VideoIcon className="h-12 w-12 rounded-lg bg-gray-100 p-3 dark:bg-gray-800" />
                  <h3 className="text-xl font-bold">Connect</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Make new connections
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <MergeIcon className="h-12 w-12 rounded-lg bg-gray-100 p-3 dark:bg-gray-800" />
                  <h3 className="text-xl font-bold">Collaborate</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Work together seamlessly
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <ActivityLogIcon className="h-12 w-12 rounded-lg bg-gray-100 p-3 dark:bg-gray-800" />
                  <h3 className="text-xl font-bold">Focus</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Boost your productivity
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <UserIcon className="h-12 w-12 rounded-lg bg-gray-100 p-3 dark:bg-gray-800" />
                  <h3 className="text-xl font-bold">Engage</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Be part of a community
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <AccessibilityIcon className="h-12 w-12 rounded-lg bg-gray-100 p-3 dark:bg-gray-800" />
                  <h3 className="text-xl font-bold">Adapt</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Embrace flexibility
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32">
            <div className="container grid items-center gap-6 px-4 text-center md:px-6">
              <div className="justify-center space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  The Perfect Workspace
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tour the best coworking spaces around the world. From stylish
                  urban hubs to tranquil retreats, find the perfect space to
                  inspire your best work.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-1 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <ul className="grid gap-6">
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Inspiration</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                          Find your muse in a space designed for creativity.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Tranquility</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                          Escape the hustle and bustle in a peaceful oasis.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Productivity</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                          Get down to work in a space designed for focus.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Meet our Members
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Trusted by the best teams in the world. We help teams of all
                  sizes.
                </p>
              </div>
              <div className="mx-auto grid w-full max-w-5xl items-center justify-center gap-6 [&>img]:mx-auto"></div>
            </div>
          </section>
          <section className="w-full border-t py-12 md:py-24 lg:py-32">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Experience the workflow the best frontend teams love.
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let your team focus on shipping features instead of managing
                  infrastructure with automated CI/CD.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Sign Up</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Sign up to get notified when we launch.
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 Acme Inc. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:ml-auto sm:gap-6">
            <Link
              className="text-xs underline-offset-4 hover:underline"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs underline-offset-4 hover:underline"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
    </>
  );
}
