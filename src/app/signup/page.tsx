import Image from "next/image";
import SignupForm from "./SignupForm";
import { Button } from "@nextui-org/react";

export default function Home() {
    return (
        <main className="flex items-center justify-between h-screen w-screen bg-[#0E1217] max-lg:flex-col">

            <div className="h-screen w-[40vw] bg-[#33B3AE] max-lg:hidden flex flex-col justify-center items-center py-20 px-10 gap-10">
                <p className="text-black text-4xl font-extrabold ">Already registered?</p>
                <p className="text-center text-xl">Log in to your account.</p>
                <Button className="bg-black rounded-full  p-7 px-10 text-lg text-white">
                    Log in
                </Button>
            </div>
            <SignupForm />
        </main>
    );
}
