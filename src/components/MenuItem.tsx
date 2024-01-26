'use client';

import React from 'react'

type MenuItemProps = {
    onClick: () => void;
    label: string;
}

export default function MenuItem({onClick, label}: MenuItemProps) {

  return (
    <div onClick={onClick} className='px-4 py-3 cursor-pointer  hover:bg-neutral-100 transition font-semibold '>
        {label}
    </div>
  )
}