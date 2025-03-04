"use server";


import SignInButton from "@/app/components/sign-in-button";
import SignOutButton from "@/app/components/sign-out-button";
import { auth } from "@/auth";
import Link from 'next/link'

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    return (
      <div className="p-8 m-8">
        <p className="text-grey-400">You are signed in..</p>
        <Link href="/user-info" className="text-yellow-400"> user info</Link>
        <hr className="border-2 border-green-200" />
        <SignOutButton />
      </div>
    );
  }

  return (
    <div className="p-8 m-8">
      <p className="text-green-500"> You are not logged in!</p>
      <SignInButton />
    </div>
  );
}
