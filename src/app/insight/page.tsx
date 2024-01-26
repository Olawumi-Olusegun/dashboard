import PageTitle from '@/components/PageTitle'
import React from 'react'

type Props = {}

export default function InsightPage({}: Props) {
  return (
    <div className='flex-1 p-5 '>
    <div className='flex flex-col bg-white p-5 rounded-md'>
      <div className='flex items-center justify-between'>
        <PageTitle className='text-sm  py-3'>
          Insight page
        </PageTitle>
      </div>
    </div>
  </div>
  )
}