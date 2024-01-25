'use client';

import React, { useState } from 'react'
import { Bell, Menu, Power, X } from 'lucide-react'
import { Button } from './ui/button'
import PageTitle from './PageTitle';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Link from 'next/link';
import Modal from './Modal';
import SidebarNav from './SidebarNav';

type Props = {}

export default function HeaderNav({}: Props) {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);


  return (
    <>
    <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className='w-full py-[0.5625rem] border-b px-5 '>
        {
            isModalOpen && (
                <>
                <button type='button' title='close modal' onClick={closeModal} className='absolute h-10 w-10 flex items-center border border-black  justify-center z-[50] p-2 top-5 right-5 text-2xl rounded-full hover:bg-black hover:text-white'>
                <X />
                </button>
                <aside className=" bg-white h-screen z-[100] absolute left-0 top-0 border-r transition-all duration-300">
                    <SidebarNav />
                </aside>
                </>

            )
        }

            <div className='flex items-center gap-2 justify-between md:gap-4 py-[0.5625rem] '>
            
            <Button onClick={openModal} className='bg-transparent rounded-full text-black hover:bg-muted size-default p-2 h-10 w-10 lg:hidden'>
                <Menu  />
            </Button>


                <PageTitle className='hidden md:flex md:text-lg'>
                    Dashboard
                </PageTitle>
                

                <input type="text" placeholder='Search...' className=' rounded-full w-full ml-auto lg:w-auto p-3 placeholder:text-sm py-[0.5rem]  ' />

                <div className='flex items-center space-x-3 lg:space-x-5'>
                    <div className='flex items-center space-x-2'>
                        <img src="images/calendar.png" alt="calendar" className='w-4 h-4' />
                        
                        <span className='hidden lg:block text-sm'>November 15, 2024</span>
                    </div>
                    
                    <Button className=' bg-transparent rounded-full lg:flex w-10 h-10 items-center justify-between border border-[#DADDDD] text-black hover:bg-transparent px-2'>
                        <Bell  />
                    </Button>
                    
                    <div className='lg:block cursor-pointer relative'>
            
                        <ul className="flex flex-col gap-2 max-w-[280px] mx-auto">

                            <li>
                                <details className="group relative w-full lg:max-w-[280px]">
                                    
                                    <summary className="flex items-center justify-between border rounded-full gap-2 lg:px-[8px] lg:py-[4px] font-medium marker:content-none hover:cursor-pointer">

                                        <div className="flex items-center justify-between lg:gap-x-4 w-8 h-8 lg:w-auto lg:h-auto ">

                                            <img src="images/user-avatar.png" alt="user-avatar" className=" w-full h-full lg:w-8 lg:h-8 rounded-full object-cover" />

                                            <div className='hidden flex-col lg:flex'>
                                                <span className='text-sm'>Justin Bergson</span>
                                                <span className='text-xs text-[#787486]'>Justin@gmail.com</span>
                                            </div>

                                        </div>

                                        <svg className="w-3 h-3 hidden lg:block text-gray-500 transition-all duration-300 rotate-[80deg] group-open:rotate-[260deg]" xmlns="http://www.w3.org/2000/svg"
                                            width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path fillRule="evenodd"
                                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                            </path>
                                        </svg>

                                    </summary>

                                    <article className="pb-4 absolute z-10 right-0 bg-white w-[200px] shadow transition-all duration-300 rounded-md ">

                                        <ul className="flex flex-col gap-2 mt-4">

                                            <li className="flex items-center gap-2 cursor-default  p-2 pb-4 w-full border-b">
                                        
                                                <img src="images/calendar.png" alt="calendar" className='w-4 h-4' />
                                                <span className='text-xs text-gray-400'>November 15, 2024</span>
                                            </li>

                                            <li className="flex gap-2 cursor-pointer hover:bg-gray-50 p-2 w-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                                    stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z">
                                                    </path>
                                                </svg>


                                                <Link href={`#`}>
                                                    Account
                                                </Link>
                                            </li>



                                            <li className="flex gap-2 cursor-pointer hover:bg-gray-50 p-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                                    stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z">
                                                    </path>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z">
                                                    </path>
                                                </svg>


                                                <Link href={`#`}>
                                                    Settings
                                                </Link>
                                            </li>

                                            <button type="submit" className="flex items-center gap-x-3 text-left text-sm p-2 w-full hover:bg-red-50">
                                                <Power className='text-red-500' />
                                                Log Out
                                            </button>

                                        </ul>

                                    </article>

                                </details>
                            </li>

                        </ul>

                    </div>

                </div>

            </div>
        </div>
    </Modal>
    </>
  )
}