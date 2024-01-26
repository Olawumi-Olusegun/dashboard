"use client";

import { AlertCircle, Archive, ArchiveX, File, Inbox, MessagesSquare, Send, ShoppingCart, Trash2, Users2 } from 'lucide-react'
import React from 'react'
import { Nav } from './nav'
import { Button } from './ui/button';
import Link from 'next/link';
import ToggleSwitch from './ToggleSwitch';

type Props = {}

export default function SidebarNav({}: Props) {
  return (
    <div className='relative flex flex-col h-screen bg-[#F7F8FA]'>
          <Link href={`/`} className=' bg-transparent rounded-full mt-5 mb-2 flex  items-center justify-center text-black hover:bg-transparent'>
              <img src="images/brand.png" alt="brand-logo" className=' w-10 h-10 cursor-pointer object-contain' />
            </Link>
        <Nav
            isCollapsed={true}
            links={[
              {
                title: "Inbox",
                label: "128",
                icon: "images/dashboard.png",
                variant: "default",
                href: "/"
              },
              {
                title: "Users",
                label: "9",
                icon: "images/trend-up2.png",
                variant: "ghost",
                href: "/users"
              },
              {
                title: "Orders",
                label: "",
                icon: "images/profile-2user.png",
                variant: "ghost",
                href: "/orders"
              },
              {
                title: "Junk",
                label: "23",
                icon: "images/box.png",
                variant: "ghost",
                href: "/archive"
              },
              {
                title: "Trash",
                label: "",
                icon: "images/discount-shape.png",
                variant: "ghost",
                href: "/trash"
              },
              {
                title: "Archive",
                label: "",
                icon: "images/info-circle.png",
                variant: "ghost",
                href: "/archive-2"
              },
            ]}
          />
          <ToggleSwitch />

          <div className='flex flex-col gap-2 items-center justify-center mt-auto pb-10'>
            
            <Button className=' bg-transparent rounded-full flex  items-center text-black hover:bg-transparent'>
              <img src="images/arrow-right.png" alt="arrow-right" className=' w-6 h-6 cursor-pointer object-contain' />
            </Button>
            
            <Button className=' bg-transparent rounded-full flex items-center text-black hover:bg-transparent'>
              <img src="images/cog.png" alt="settings" className=' w-10 h-10 cursor-pointer object-contain' />
            </Button>
            
            <Button className=' bg-transparent rounded-full flex  items-center text-black hover:bg-transparent'>
              <img src="images/power.png" alt="power" className=' w-10 h-10 cursor-pointer object-contain' />
            </Button>
            
          </div>
    </div>
  )
}