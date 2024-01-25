import React from 'react'
import DataTable from './DataTable ';
import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';

type Props = {}


export type LastOrderProps = {
    id: string | number;
    name: string;
    imageName: string;
    date: string;
    amount: string;
    status: string;
    invoice: string;
  }
     
export const data: LastOrderProps[] = [
    {
    id: 1,
    name: "Marcus Bergson",
    imageName: "marcus",
    date: "Nov 15, 2023",
    amount: "$80,000",
    status: "Paid",
    invoice: "View",
    },
    {
    id: 2,
    name: "Jaydon Vaccaro",
    imageName: "marcus",
    date: "Nov 15, 2023",
    amount: "$150,000",
    status: "Refund",
    invoice: "View",
    },
    {
    id: 3,
    name: "Corey Schleifer",
    imageName: "marcus",
    date: "Nov 15, 2023",
    amount: "$87,000",
    status: "Paid",
    invoice: "View",
    },
    {
    id: 4,
    name: "Cooper Press",
    date: "Nov 15, 2023",
    imageName: "marcus",
    amount: "$100,000",
    status: "Refund",
    invoice: "View",
    },
    {
    id: 5,
    name: "Phillip Lubin",
    date: "Nov 15, 2023",
    imageName: "marcus",
    amount: "$78,000",
    status: "Paid",
    invoice: "View",
    },
];

export const columns: ColumnDef<LastOrderProps>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({row}) => {
        return <div className='flex gap-2 items-center'>
          <div className='w-10 h-10 flex items-center justify-center'>
            <img src={`images/${row.getValue("name")}.png`}  alt='user-avatar' className='object-cover' />
          </div>
           <span className="text-[#3A3F51] pr-10 whitespace-nowrap ">{row.getValue("name")}</span>
        </div>
      }
    },
    {
      accessorKey: "date",
      header: "Date",
      cell: ({row}) => {
        return <div className=''>
           <span className="text-[#737373]  whitespace-nowrap ">{row.getValue("date")}</span>
        </div>
      }
    },
    {
      accessorKey: "amount",
      header: "Amount",
      cell: ({row}) => {
        return <div className=''>
           <p className="text-[#0D062D] font-semibold">{row.getValue("amount")}</p>
        </div>
      }
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({row}) => {
        return <div className=''>
           <p className={row.getValue("status") === "Paid" ? "text-[#34CAA5]" : "text-[#ED544E]" }>{row.getValue("status")}</p>
        </div>
      }
    },
    {
      accessorKey: "invoice",
      header: "Invoice",
      cell: ({row}) => {
        return <div className='flex items-center'>
           <div className='w-8 h-8 flex items-center justify-center'>
             <img src={`images/document-download.png`}  alt='user-avatar' className='object-contain' />
           </div>
           <p className="text-[#0D062D] inline-block">{row.getValue("invoice")}</p>
        </div>
      }
    },
    
  ]

export default function LastOrder({}: Props) {
  return (
    <>
    <div className=''>
        <DataTable columns={columns} data={data} />
    </div>
    </>
  )
}