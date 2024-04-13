import React from 'react'
import { Button, Input, Snippet } from "@nextui-org/react";
import plug from "../../../public/plug.svg"
import Image from 'next/image';
import SessionComponent from './SessionComponent';
type Props = {}

const ConnectComponent = (props: Props) => {

    return (
        <div className='flex flex-col  w-full justify-center bg-black text-white px-28 py-10 max-md:px-16 '>
            <p className='text-3xl font-medium'>Hello Shiv👋🏼,</p>
            <p>Your device ID is  <Snippet symbol="" color='secondary' className='text-white '>12345678765432</Snippet></p>
            <div className='w-full bg-blue rounded-xl p-5 mt-5 flex flex-col gap-3'>
                <p>Enter device ID to connect</p>
                <div className='flex gap-2 items-center justify-between'>
                    <Input
                        placeholder='Enter ID'
                        classNames={{
                            input: [
                                'bg-[#f4f4f5]'
                            ]
                        }}
                    ></Input>
                    <Button
                        className='bg-cyan px-10 font-medium'
                        startContent=<Image src={plug} alt='' />
                    >
                        Connect
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
            <p className='text-xl font-semibold pt-8'>My Sessions</p>

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
                    <p>sdf</p>
                    <p>sfe</p>
                    <p>sdf</p>
                    <p>sfsdf</p>
                </div>
            </div>
        </div>
    )
}

export default ConnectComponent