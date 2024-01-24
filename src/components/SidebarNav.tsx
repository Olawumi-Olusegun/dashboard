"use client";

import { AlertCircle, Archive, ArchiveX, File, Inbox, MessagesSquare, Send, ShoppingCart, Trash2, Users2 } from 'lucide-react'
import React from 'react'
import { Nav } from './nav'

type Props = {}

export default function SidebarNav({}: Props) {
  return (
    <div className='relative'>
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
          <Nav
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
          />
    </div>
  )
}