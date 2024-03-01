"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Testplayground from "./testplayground";

export default function Home() {
  const { data: session, status } = useSession();

  // console.log(status, "status is ss from client");

  if (session) {
    console.log(session, "session is");

    return (
      <>
        {session.user?.name} <br />
        <Button onClick={() => signOut()}>Sign out</Button>
      </>
    );
  }

  return (
    <>
      Not signed in <br />
      <Button onClick={() => signIn("google")}>Sign in with Google</Button>
      <br></br>
      <Button onClick={() => signIn("facebook")}>Sign in with Facebook</Button>
      <br></br>
      <Button onClick={() => signIn("github")}>Sign in with Github</Button>
      <br></br>
      <Button onClick={() => signIn("apple")}>Sign in with Apple</Button>
      <br></br>
      <Testplayground />
    </>
  );
}
