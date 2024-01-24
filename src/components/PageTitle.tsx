import { cn } from '@/lib/utils';
import React from 'react'

type Props = {
    children: React.ReactNode;
    className?: string;
}

export default function PageTitle({ children, className}: Props) {
  return (
    <h1 className={cn("text-2xl font-semibold", className)}>{children}</h1>
  )
}