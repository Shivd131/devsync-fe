import React from 'react'

type Props = {}

const SessionComponent = (props: Props) => {
    return (
        <div className='bg-blue rounded-xl p-3 flex flex-col'>
            <div className='flex w-full items-center justify-between text-cyan font-semibold'>
                <p>Session Address</p>
                <p>7367</p>
            </div>
            <div className='flex w-full items-center justify-between text-cyan font-semibold'>
                <p>Active Users</p>
                <p>7</p>
            </div>
            <div className='flex w-full items-center justify-between text-cyan font-semibold'>
                <p>Session Time</p>
                <p>23 mins</p>
            </div>
            <div className='flex w-full items-center justify-between text-cyan font-semibold'>
                <p>Session Status</p>
                <p>Active</p>
            </div>
        </div>
    )
}

export default SessionComponent