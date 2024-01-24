"use client";

import React from 'react'
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import CardContent from './CardContent';

type Props = {
    cardItem: {
        label: string;
        icon: LucideIcon;
        amount: string;
        description: string;
    }
}

export default function Card({ cardItem: {label, icon: Icon, amount, description }}: Props) {
  return (
    <CardContent>
        <section className='flex justify-between gap-2'>
            <p className='text-sm'>{label}</p>
            <Icon className="h-4 w-4 text-gray-400" />
        </section>
        <section>
            <h2 className='text-2xl font-semibold'>{amount}</h2>
            <p className='text-sm text-gray-500 '>{description}</p>
        </section>
    </CardContent>
  )


}
