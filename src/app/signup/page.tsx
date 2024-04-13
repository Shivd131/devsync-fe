"use client"
import Image from "next/image";
import SignupForm from "./SignupForm";
import { Button } from "@nextui-org/react";
import vassss from "../../../public/vassss.svg"
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
    const animationProps = {
        scale: [1, 1.2, 1], 
        transition: { duration: 1, repeat: Infinity }, 
    };
    const [scale, setScale] = useState(1);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setScale((prevScale: number) => (prevScale === 1 ? 1.005 : 1));
        }, 3000); 

        return () => clearInterval(intervalId); 
    }, []);
    return (
        <main className="flex items-center justify-between max-sm:h-[110vh] h-screen w-screen bg-[#0E1217] max-lg:flex-col">

            <div className="h-screen w-[40vw] bg-[#33B3AE] max-lg:hidden flex flex-col justify-center items-center py-20 px-10 gap-10">
                <p className="text-black text-4xl font-extrabold "></p>
                <AnimatePresence>
                    <motion.div
                        key="image-container"
                        initial={{ scale: 1 }}
                        animate={{ scale: scale }}
                        transition={{ duration: 1 }}
                    >
                        <Image src={vassss} alt={""} />
                    </motion.div>
                </AnimatePresence>

                <p className="text-center font-semibold text-xl">Elevate your coding experience with remote terminal access, streaming videos, directory management, and much more.</p>

            </div>
            <SignupForm />
        </main>
    );
}
