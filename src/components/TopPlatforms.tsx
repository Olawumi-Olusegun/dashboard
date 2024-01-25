import React from 'react'
import { Progress } from "@/components/ui/progress"
import PageTitle from './PageTitle'

type Props = {}

export default function TopPlatforms({}: Props) {
  return (
    <div className='bg-white flex flex-col space-y-4 '>
        
        <div className='flex flex-col justify-between h-[97px]'>
            <PageTitle className='text-md'>
                Book Bazaar
            </PageTitle>
            <Progress value={50} className='bg-[#F5F5F5] h-[12px]' indicatorColor="bg-[#6160DC]" />
            <div className='flex items-center justify-between'>
                <span>$2,500,000</span>
                <span>+15%</span>
            </div>
        </div>

        <div className='flex flex-col justify-between h-[97px]'>
            <PageTitle className='text-md'>
                Artisan Aisle
            </PageTitle>
            <Progress value={30} className='bg-[#F5F5F5]  h-[12px]' indicatorColor="bg-[#54C5EB]" />
            <div className='flex items-center justify-between'>
                <span>$1,800,000</span>
                <span>+10%</span>
            </div>
        </div>

        <div className='flex flex-col justify-between h-[97px]'>
            <PageTitle className='text-md'>
                Toy Troop
            </PageTitle>
            <Progress value={20} className='bg-[#F5F5F5]  h-[12px]' indicatorColor="bg-[#FFB74A]" />
            <div className='flex items-center justify-between'>
                <span>$1,200,000</span>
                <span>+8%</span>
            </div>
        </div>

        <div className='flex flex-col justify-between h-[97px]'>
            <PageTitle className='text-md'>
                XStore
            </PageTitle>
            <Progress value={20} className='bg-[#F5F5F5]  h-[12px]' indicatorColor="bg-[#FF4A55]" />
            <div className='flex items-center justify-between'>
                <span>$1,200,000</span>
                <span>+8%</span>
            </div>
        </div>

    </div>
  )
}