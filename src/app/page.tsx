import Image from "next/image";
import LoginForm from "./LoginForm";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex items-center justify-between h-screen w-screen bg-[#0E1217] max-lg:flex-col">
      <LoginForm />
      <div className="h-screen w-[40vw] bg-[#33B3AE] max-lg:hidden flex flex-col justify-center items-center py-20 px-10 gap-10">
        <p className="text-black text-5xl font-extrabold ">New Here?</p>
        <p className="text-center">Sign up now to elevate your coding experience with remote terminal access, streaming videos, directory management, and much more.</p>
        <Button className="bg-black rounded-full  p-7 px-10 text-lg text-white">
          Sign Up
        </Button>
      </div>
      
    </main>
  );
}
