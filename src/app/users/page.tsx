"use client"

import DataTable from '@/components/DataTable '
import React from 'react'
import { ColumnDef } from "@tanstack/react-table"
import PageTitle from '@/components/PageTitle'
import Image from 'next/image'
 

export type Payment = {
  id: string;
  name: string;
  email: string;
  lastOrder: string;
  method: string;
}
   
  export const data: Payment[] = [
    {
      id: "728ed52f",
      name: "Olawumi Olusegun",
      email: "olawumi.olusegun@gmail.com",
      lastOrder: "lastOrder",
      method: "Method",
    },
    {
      id: "489e1d42",
      name: "Olawumi Olusegun",
      email: "olawumi.olusegun@gmail.com",
      lastOrder: "lastOrder",
      method: "Method",
    },
  ];

type Props = {}

export const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({row}) => {
        return <div className='flex gap-2 items-center'>
           <Image src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue("name")}`} fill alt='user-avatar' className='w-10 h-10' />
           <p>{row.getValue("name")}</p>
        </div>
      }
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "lastOrder",
      header: "Last Order",
    },
    {
      accessorKey: "method",
      header: "Method",
    },
  ]

export default function UsersPage({}: Props) {
  return (
    <div className='p-5 flex flex-1 flex-col'>
    <PageTitle>
        Users
    </PageTitle>
    <div className=''>
        <DataTable columns={columns} data={data} />
    </div>
    </div>
  )
}