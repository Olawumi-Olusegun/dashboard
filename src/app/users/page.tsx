"use client";

import React from 'react'
import PageTitle from '@/components/PageTitle'



export default function UsersPage() {
  return (
    <div className='flex-1  p-5 '>
      <div className='flex flex-col bg-white p-5 rounded-md'>
        <div className='flex items-center justify-between'>
          <PageTitle className='text-sm  py-3'>
            User page
          </PageTitle>
        </div>
      </div>
    </div>
  )
}