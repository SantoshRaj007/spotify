import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className='w-full flex justify-between items-center font-semibold'>
                <div className='flex items-center gap-2'>
                    <img onClick={()=>navigate(-1)} className='w-8 bg-[#000] p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt='arrow-left'/>
                    <img onClick={()=>navigate(1)} className='w-8 bg-[#000] p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt='arrow-right'/>
                </div>
                <div className='flex items-center gap-4'>
                    <p className='bg-[#f1f1f1] text-[#000] text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
                    <p className='bg-[#000] py-1 px-3 rounded-2xl text-[15px] cursor-pointer'>Install App</p>
                    <p className='bg-[#6d4aae] text-[#f1f1f1] w-7 h-7 rounded-full flex items-center justify-center'>S</p>
                </div>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <p className='bg-[#f9f9f9] text-[#000] px-4 py-1 rounded-2xl cursor-pointer'>All</p>
                <p className='bg-[#000] px-4 py-1 rounded-2xl cursor-pointer'>Product</p>
                <p className='bg-[#000] px-4 py-1 rounded-2xl cursor-pointer'>podcasts</p>
            </div>
        </>
    )
}

export default Navbar