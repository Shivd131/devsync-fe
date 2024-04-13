import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='h-screen w-screen bg-black flex flex-col text-white p-10 gap-2'>
        <p className='text-4xl font-medium text-cyan'>Hello Shiv,</p>
        <p className='text-xl text-cyan'>Welcome to DevSync</p>
        <p className='w-[40%]'>Elevate your coding experience with remote terminal access, streaming videos, directory management, and much more</p>
        <p className='text-xl'>Access these features with DevSync</p>
        <div className='flex flex-col'>
            <p>Remote access to desktop CLI or terminal</p>
            <p>Admin can also give access to selective folders or directories</p>
            <p>Multiple terminal sessions</p>
            <p>Create custom command template for faster execution</p>
            <p>Multiple users can be connected to single desktop or host</p>
            <p>Directory management</p>
            <p>Share files remotely </p>
            <p>Resolve merge conflicts using interactive code editor</p>
            <p>Video and other files streaming remotely</p>
        </div>
    </div>
  )
}

export default page