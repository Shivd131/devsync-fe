'use client'
import React, { useState } from 'react'
import { Button, Input, Snippet } from "@nextui-org/react";
import plug from "../../../public/plug.svg"
import Image from 'next/image';
import SessionComponent from './SessionComponent';
type Props = {}
import { useRouter } from 'next/navigation';
import { RootState } from '@/redux/store';
import { ToastContainer, toast } from 'react-toastify';
import connectSession from '@/utils/script';
import { addWebSocket } from '@/redux/websocketSlice';
import { useDispatch, useSelector } from 'react-redux';


const ConnectComponent = (props: Props) => {
    const user = useSelector((state: RootState) => state.user);
    const router = useRouter();
    const [networkUrl, setNetworkUrl] = useState('');
    const [filePath, setFilePath] = useState('');
    const [videoState, setVideoState] = useState('')

    const authToken = useSelector((state: RootState) => state.auth.token);

    const dispatch = useDispatch();
    function handleClick(): void {
        if (!networkUrl) {
            toast.error("Enter the network URL")
            return;
        }

        if (!authToken) {
            return;
        }
        const uri = networkUrl;
        const webSocketUrl = `ws://${networkUrl}/connect-session?token=${encodeURIComponent(authToken)}`;

        const ws = connectSession({ uri, authToken })
        dispatch(addWebSocket(ws));
        router.push(`/terminal?ws=${encodeURIComponent(webSocketUrl)}`);

    }

    const handleClickStream = () => {
        // Check if filePath is not empty


        if (!filePath) {
            toast.error("Enter the absolute file path");
            return;
        }

        // Update video state with file path and position
        setVideoState({ filePath, position: 'absolute' });
    };

    return (
        <div className='flex flex-col  w-full justify-center bg-black text-white px-28 py-10 max-md:px-16 '>
            <ToastContainer />
            <p className='text-3xl font-medium'>Hello {user.name}👋🏼,</p>
            {/* <p>Your device ID is  <Snippet symbol="" color='secondary' className='text-white '>12345678765432</Snippet></p> */}
            <div className='w-full bg-blue rounded-xl p-5 mt-5 flex flex-col gap-3'>
                <p>Enter network URL to  connect</p>
                <div className='w-full bg-blue rounded-xl p-5 mt-5 flex  gap-3 max-sm:hidden gap-2'>
                    <Input
                        placeholder='Enter Network URL'
                        classNames={{
                            input: [
                                'bg-[#f4f4f5]'
                            ]
                        }}
                        value={filePath}
                        onChange={(e) => setFilePath(e.target.value)}
                    />
                    <Button
                        className='bg-cyan px-10 font-medium'
                        startContent=<Image src={plug} alt='' />
                        onClick={handleClickStream}
                    >
                        Stream
                    </Button>
                </div>
            </div>
            <p className='text-3xl text-center pt-5'>OR</p>
            <div className='w-full bg-blue rounded-xl p-5 mt-5 flex flex-col gap-3'>
                <p>Create a new session to Lorem ipsum dolor sit amet, consectetur adipisicing elit.  quod ducimus sit, id adipisci debitis perferendis porro, accusantium at?</p>
                <div className='flex flex-col gap-2 items-center justify-between'>

                    <Button
                        className='bg-cyan px-10 font-medium sm:w-[50%] self-center py-6'
                        startContent=<Image src={plug} alt='' />
                    >
                        Create a new session
                    </Button>
                </div>
            </div>
            <p className='text-xl font-semibold pt-8'>Recent Sessions</p>

            <div className='flex flex-col sm:hidden gap-4'>
                <SessionComponent />
                <SessionComponent />
            </div>

            <div className='w-full bg-blue rounded-xl p-5 mt-5 flex flex-col gap-3 max-sm:hidden'>
                <div className='font-semibold grid grid-cols-4 p-3 shadow-md w-full py-6 justify-between items-center'>
                    <p>Session Address</p>
                    <p>Active Users</p>
                    <p>Session Time</p>
                    <p>Session Status</p>
                </div>
                <div className='grid grid-cols-4 p-3 w-full py-2 justify-between items-center'>
                    <p>7365</p>
                    <p>7</p>
                    <p>23 mins</p>
                    <p>Active</p>
                </div>
            </div>
            <p className='text-xl font-semibold pt-8'>Stream Media</p>
            <div className='w-full bg-blue rounded-xl p-5 mt-5 flex flex-col gap-3'>
                <div className='flex gap-3'>
                    <Input
                        placeholder='Enter Absolute File Path'
                        classNames={{
                            input: [
                                'bg-[#f4f4f5]'
                            ]
                        }}
                        value={filePath}
                        onChange={(e) => setFilePath(e.target.value)}
                    ></Input>

                    <Button
                        className='bg-cyan px-10 font-medium'
                        startContent=<Image src={plug} alt='' />
                        onClick={handleClickStream}
                    >
                        Stream
                    </Button>
                </div>

                <video className='rounded border-black' src="http://172.18.239.143:3000/mediaFile/@Videos;movie;The.Hangover.2009.UNRATED.720p.BrRip.x264.YIFY.mp4/" autoPlay controls loop></video>
            </div>


        </div>
    )
}

export default ConnectComponent

