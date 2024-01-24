import Image from 'next/image';
import React from 'react'

export type SaleProps = {
    saleData: {
        name: string;
        email: string;
        saleAmount: string;
    }
}

export default function SalesCard({ saleData: {name, email, saleAmount }}: SaleProps) {
  return (
    <>
     <div className="flex flex-wrap justify-between gap-3">
        <section className="flex justify-between gap-3">
            <div className='h-12 w-12 rounded-full bg-gray-100 p-1'>
                <Image src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${name}`} alt='user-avatar' className='' width={200} height={200} />
            </div>
            <div className='text-sm'>
                <p>{name}</p>
                <div className='text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto text-gray-400 '>{email}</div>
            </div>
        </section>
        <p>{saleAmount}</p>
     </div>
    </>
  )
}