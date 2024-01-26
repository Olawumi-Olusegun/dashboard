'use client';
import { Power } from 'lucide-react';
import React, { useState } from 'react'
import Avatar from './Avatar';
import MenuItem from './MenuItem';

type Props = {}

export default function UserMenu ({}: Props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className='relative'>
        <div  onClick={toggleOpen} className="flex flex-row items-center gap-3 lg:p-1 rounded-full border border-neutral-200">

            <div className="h-[35px] w-[35px] flex flex-row items-center justify-center rounded-full cursor-pointer hover:shadow-md transition">
                <Avatar />
            </div>

            <div onClick={() => {}} className="hidden lg:block text-sm font-semibold  rounded-full hover:bg-neutral-100 transition cursor-pointer ">
                <div className='hidden flex-col lg:flex pr-2'>
                    <span className='text-sm'>Justin Bergson</span>
                    <span className='text-xs text-[#787486]'>Justin@gmail.com</span>
                </div>
            </div>
        </div>
   
        <div className={`absolute z-40 transition-all duration-300 rounded-xl shadow-md w-[50vw] lg:w-full  right-0 top-12 bg-white overflow-hidden text-sm ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
            <div className="flex flex-col cursor-pointer">
              
                <div className="flex items-center gap-2 cursor-default  px-4 py-4 pb-4 w-full border-b">
                    <img src="images/calendar.png" alt="calendar" className='w-4 h-4' />
                    <span className='text-xs text-gray-400'>November 15, 2024</span>
                </div>
                                
                <MenuItem onClick={() => {}} label='Login' />
                <MenuItem onClick={() => {}} label='Register' />
                
                <button type="submit" className="flex items-center gap-x-3 text-left text-sm p-2 px-4 w-full hover:bg-red-50">
                    <Power className='text-red-500' />
                    Log Out
                </button>

            </div>
        </div>
          
  
    </div>
  )
}