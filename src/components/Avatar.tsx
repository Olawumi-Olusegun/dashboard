'use client';


import Image from 'next/image';
import React from 'react'

type Props = {}

export default function Avatar({}: Props) {
  return (
    <>
        <Image src={"/images/user-avatar.png"} width={35} height={35} className='rounded-full object-contain'  alt='user-avatar' />
    </>
  )
}