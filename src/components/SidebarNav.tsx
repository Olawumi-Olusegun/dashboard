"use client";

import { AlertCircle, Archive, ArchiveX, File, Inbox, MessagesSquare, Send, ShoppingCart, Trash2, Users2 } from 'lucide-react'
import React from 'react'
import { Nav } from './nav'
import { Button } from './ui/button';
import Link from 'next/link';

type Props = {}

export default function SidebarNav({}: Props) {
  return (
    <div className='relative flex flex-col h-screen'>
          <Link href={`/`} className=' bg-transparent rounded-full mt-5 mb-2 flex  items-center justify-center text-black hover:bg-transparent'>
              <img src="images/brand.png" alt="brand-logo" className=' w-10 h-10 cursor-pointer object-contain' />
            </Link>
        <Nav
            isCollapsed={true}
            links={[
              {
                title: "Inbox",
                label: "128",
                icon: Inbox,
                variant: "default",
                href: "/"
              },
              {
                title: "Users",
                label: "9",
                icon: File,
                variant: "ghost",
                href: "/users"
              },
              {
                title: "Orders",
                label: "",
                icon: Send,
                variant: "ghost",
                href: "/orders"
              },
              {
                title: "Junk",
                label: "23",
                icon: ArchiveX,
                variant: "ghost",
                href: "/archive"
              },
              {
                title: "Trash",
                label: "",
                icon: Trash2,
                variant: "ghost",
                href: "/trash"
              },
              {
                title: "Archive",
                label: "",
                icon: Archive,
                variant: "ghost",
                href: "/archive-2"
              },
            ]}
          />
          {/* <Separator /> */}
          {/* <Nav
            isCollapsed={true}
            links={[
              {
                title: "Social",
                label: "972",
                icon: Users2,
                variant: "ghost",
                href: "/user"
              },
              {
                title: "Updates",
                label: "342",
                icon: AlertCircle,
                variant: "ghost",
                href: "/alert"
              },
              {
                title: "Forums",
                label: "128",
                icon: MessagesSquare,
                variant: "ghost",
                href: "/message-square"
              },
              {
                title: "Shopping",
                label: "8",
                icon: ShoppingCart,
                variant: "ghost",
                href: "/messagae"
              },
              {
                title: "Promotions",
                label: "21",
                icon: Archive,
                variant: "ghost",
                href: "/arc"
              },
            ]}
          /> */}

          <div className='flex flex-col gap-2 items-center justify-center mt-auto pb-10'>
            
            <Button className=' bg-transparent rounded-full flex items-center text-black hover:bg-transparent'>
              <img src="images/arrow-right.png" alt="arrow-right" className=' w-10 h-10 cursor-pointer object-contain' />
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