'use client'
import React from 'react';
import Image from 'next/image';
import logo from '../../../public/logo.svg';
import edit from '../../../public/edit.svg';
import logoone from '../../../public/logoone.svg';
import { Button, Input, Modal } from '@nextui-org/react';
import up from '../../../public/up.svg';
import send from '../../../public/send.png';
import NewTerminalModal from './NewTerminalModal';

type Props = {};

interface SidebarOption {
    id: number;
    name: string;
    componentText: string;
}
interface Message {
    text: string;
    type: 'user' | 'system';
}


const Page = (props: Props) => {
    const [activeOption, setActiveOption] = React.useState('');
    const [messages, setMessages] = React.useState<Message[]>([]);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [inputMessage, setInputMessage] = React.useState('');
    const [sidebarOptions, setSidebarOptions] = React.useState<SidebarOption[]>([
        { id: 1, name: 'Terminal 1', componentText: 'Connect Component Text' },
        { id: 2, name: 'Terminal 2', componentText: 'Stream Component Text' },
        { id: 3, name: 'Terminal 3', componentText: 'Terminal 1 Component Text' },
        { id: 4, name: 'Terminal 4', componentText: 'Terminal 2 Component Text' },
    ]);

    const handleOptionClick = (option: string, componentText: string) => {
        setActiveOption(option);
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: componentText, type: 'system' },
        ]);
    };

    const handleNewTerminalSave = (name: string) => {
        const newTerminal: SidebarOption = {
            id: sidebarOptions.length + 1,
            name: ` ${name}`,
            componentText: `New Terminal: ${name}`,
        };
        setSidebarOptions((prevOptions) => [...prevOptions, newTerminal]);
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: `New Terminal added: ${name}`, type: 'system' },
        ]);
    };

    const handleSendMessage = () => {
        if (inputMessage.trim() !== '') {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: inputMessage, type: 'user' },
            ]);
            setInputMessage('');
        }
    };

    return (
        <div className="flex">
            <div className="bg-blue fixed h-screen w-[20rem] max-md:hidden flex flex-col p-5 gap-3">
                <div className="w-full flex justify-between items-center">
                    <div className="flex items-center justify-center gap-3">
                        <Image src={logo} alt="" className="h-7 w-auto" />
                        <Image src={logoone} alt="" className="h-7 w-auto" />
                    </div>
                    <Image src={edit} alt="" onClick={() => setIsModalOpen(true)} /> {/* Open modal on click */}
                </div>
                <p className="text-white text-lg pt-3 ">Your Terminals</p>

                <div className="flex flex-col gap-2 w-full">
                    {sidebarOptions.map((option) => (
                        <div
                            key={option.id}
                            onClick={() => handleOptionClick(option.name, option.componentText)}
                            className={`cursor-pointer h-12 flex items-center px-3 rounded-md ${activeOption === option.name ? 'bg-cyan' : ' bg-blue text-white'
                                }`}
                        >
                            {option.name}
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-white ml-[20rem] h-screen w-full relative">
                <div className=" p-5 bottom-0  flex gap-2 fixed w-[70rem]">
                    <Input
                        placeholder="Enter your message"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        className=''
                    />
                    <Button className="bg-cyan" onClick={handleSendMessage}>
                        Send
                    </Button>
                </div>
                <NewTerminalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleNewTerminalSave} />
                <div className="mt-5 flex flex-col gap-3 p-5">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={
                                message.type === 'user'
                                    ? 'inline-block bg-cyan rounded-md px-3 py-1 text-black max-w-[10rem]'
                                    : 'inline-block'
                            }
                        >
                            <p>{message.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
