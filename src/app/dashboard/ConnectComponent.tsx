import React from 'react'
import { Button, Input, Snippet } from "@nextui-org/react";
import plug from "../../../public/plug.svg"
import Image from 'next/image';
type Props = {}

const ConnectComponent = (props: Props) => {
    return (
        <div className='flex flex-col w-full justify-center text-white px-10'>
            <p className='text-3xl font-medium'>Hello Shiv👋🏼,</p>
            <div>
                <p>Your device ID is  <Snippet symbol="" color='secondary' className='text-white '>12345678765432</Snippet></p>
            </div>
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

        </div>
    )
}

export default ConnectComponent