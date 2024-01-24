import React from 'react'
import { cn } from '@/lib/utils'

export default function CardContent(props: React.HtmlHTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props} className={cn("flex w-full flex-col gap-3 rounded-xl border p-5 shadow-sm", props.className)} />
    )
}