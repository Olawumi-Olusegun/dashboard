'use client';

import React from 'react'
import { Bell, Menu } from 'lucide-react'
import { Button } from './ui/button'
import PageTitle from './PageTitle';

type Props = {}

export default function HeaderNav({}: Props) {
  return (
    <div className='w-full py-[0.5625rem] border-b px-3'>
        <div className='flex items-center justify-between md:gap-4 py-[0.5625rem] '>
            <PageTitle className='hidden md:flex md:text-lg'>
                Dashboard
            </PageTitle>
            <div className='flex items-center gap-6 flex-1 lg:flex-initial'>
                <input type="text" placeholder='Search...' className='rounded-full w-full p-3 placeholder:text-sm py-[0.5rem] mr-2 lg:mr-0 ' />
                <span className='hidden lg:block text-sm'>November 15, 2024</span>
                <Button className='hidden lg:block bg-transparent text-black hover:bg-transparent px-2'>
                    <Bell size={18} />
                </Button>
                <span className='hidden lg:block'>User profile</span>
            </div>
            <Button className='bg-transparent text-black hover:bg-muted size-default p-2 h-8 lg:hidden'>
                <Menu size={16} />
            </Button>
        </div>
    </div>
  )
}