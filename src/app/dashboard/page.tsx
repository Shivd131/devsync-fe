'use client'
import React, { useState } from "react";
import Image from "next/image";
import terminal from "../../../public/terminal-59.svg";
import logo from "../../../public/logo.svg";
import connectIcon from "../../../public/connect.svg";
import playIcon from "../../../public/play-button.png";
import ConnectComponent from "./ConnectComponent";
import StreamComponent from "./StreamComponent";
import Terminal1Component from "./Terminal1Component";
import Terminal2Component from "./Terminal2Component";
import terminalicon from "../../../public/terminal.svg"

const Page = () => {
    const [activeOption, setActiveOption] = useState("");

    const handleOptionClick = (option: string) => {
        setActiveOption(option);
    };

    const sidebarOptions = [
        { id: 1, name: "Connect", icon: connectIcon, component: <ConnectComponent /> },
        { id: 2, name: "Stream", icon: playIcon, component: <StreamComponent /> },
        { id: 3, name: "Terminal 1", icon: terminalicon, component: <Terminal1Component /> },
        { id: 4, name: "Terminal 2", icon: terminalicon, component: <Terminal2Component /> },
    ];

    return (
        <div className=" bg-black flex">
            {/* <div className="w-[20rem] bg-[#1b222b] h-[100vh]  flex flex-col justify-start items-center p-5 rounded-r-3xl ">
                <Image src={logo} alt="" className="h-8 w-auto self-start" />
                <div className="flex justify-between w-full">
                    <p>set</p>
                    <Image src={terminal} alt="" className="h-8 w-auto" />
                </div>
                <div className="flex flex-col gap-5 w-full pt-3">
                    {sidebarOptions.map((option) => (
                        <div
                            key={option.id}
                            onClick={() => handleOptionClick(option.name)}
                            className={`cursor-pointer h-12 flex items-center px-3 rounded-md ${activeOption === option.name ? "bg-cyan" : " bg-[#10141a] text-white"
                                }`}
                        >
                            <Image src={option.icon} alt="" className="h-6 w-6 mr-2 bg-cyan rounded-md " />
                            {option.name}
                        </div>
                    ))}
                </div>
            </div> */}
            {/* {activeOption &&
                    sidebarOptions.find((option) => option.name === activeOption)?.component} */}
            <ConnectComponent />
        </div>
    );
};

export default Page;
