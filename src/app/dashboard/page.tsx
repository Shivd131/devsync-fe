"use client"
import React, { useState } from "react";
import Image from "next/image";
import terminal from "../../../public/terminal-59.svg";
import logo from "../../../public/logo.svg";
import connect from "../../../public/connect.svg"
import play from "../../../public/play-button.png"

const Page = () => {
  const [activeOption, setActiveOption] = useState("");

  const handleOptionClick = (option: string) => {
    setActiveOption(option);
  };

  const sidebarOptions = [
    { id: 1, name: "Connect", icon: connect },
    { id: 2, name: "Stream", icon: play },
    { id: 3, name: "Terminal 1", icon: logo  },
    { id: 4, name: "Terminal 2", icon: logo  },
  ];

  return (
    <div className="h-screen w-screen bg-black flex">
      <div className="w-[20vw] bg-[#1b222b] h-screen flex flex-col justify-start items-center p-5 rounded-r-3xl">
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
              className={`cursor-pointer h-12 flex items-center px-3 rounded-md ${
                activeOption === option.name ? "bg-white" : " bg-[#10141a] text-white"
              }`}
            >
                 
              {option.name}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-grow bg-gray-200 p-5">
        {activeOption && <div className="text-center">Content for {activeOption}</div>}
      </div>
    </div>
  );
};

export default Page;
