import React from 'react'

const Heading = ({ txt }) => {
    return (
        <div className='w-full my-6'>
            <h1 className='font-montserrat text-2xl  md:text-3xl font-semibold text-center'>{txt}</h1>
            <div className='w-52 md:w-56 rounded-full h-2 bg-[#EE3235] mx-auto mt-5' />
        </div>

    )
}

export default Heading