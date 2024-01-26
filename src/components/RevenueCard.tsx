import React from 'react'

type Props = {}

export default function RevenueCard({}: Props) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4'>
        
        <div className='flex flex-col justify-between gap-[10px] p-4 rounded-md bg-white border border-[#EDF2F7] shadow-sm'>
            
            <div className='flex items-center justify-between'>
                <div className='w-[40px] h-[40px] object-contain  rounded-full border flex items-center justify-center '>
                    <img src="images/box-tick.png" alt="ico" className='object-contain  rounded-full' />
                </div>
                <img src="images/green-graph.png" alt="green-graph" className="w-[104px] h-[40px] object-cover" />
            </div>

            <p className='text-[#898989] text-[18pxpx]' >Total Orders</p>
            <h4 className='text-[#3A3F51] font-bold'>350</h4>

            <div className='flex items-center justify-between'>
                <div  className='flex items-center justify-between px-[6px] py-[4px] w-[70px] bg-cyan-50 rounded-full overflow-hidden' >
                    <img src="images/trending-up.png" alt="ico" className='w-[20px] h-[10px] object-contain' />
                    <p className='text-[12px] text-[#34CAA5]'>23,5%</p>
                </div>
                 <span className='text-[#606060] text-[12px] tracking-tighter '>vs. previous month</span>
            </div>
            
        </div>
        
        <div className='flex flex-col justify-between gap-[10px] p-4 rounded-md bg-white border border-[#EDF2F7] shadow-sm'>
            
            <div className='flex items-center justify-between'>
                <div className='w-[40px] h-[40px] object-contain  rounded-full border flex items-center justify-center '>
                    <img src="images/3d-rotate.png" alt="ico" className='object-contain  rounded-full' />
                </div>
                <img src="images/red-graph.png" alt="green-graph" className="w-[104px] h-[40px] object-cover" />
            </div>

            <p className='text-[#898989] text-[18pxpx]' >Total Refund</p>
            <h4 className='text-[#3A3F51] font-bold'>270</h4>

            <div className='flex items-center justify-between'>
                <div  className='flex items-center justify-between px-[6px] py-[4px] w-[70px] bg-red-50 rounded-full overflow-hidden' >
                    <img src="images/trending-down.png" alt="ico" className='w-[20px] h-[10px] object-contain' />
                    <p className='text-[12px] text-red-500'>23,5%</p>
                </div>
                 <span className='text-[#606060] text-[12px] tracking-tighter '>vs. previous month</span>
            </div>
            
        </div>


        <div className='flex flex-col justify-between gap-[10px] p-4 rounded-md bg-white border border-[#EDF2F7] shadow-sm'>
            
            <div className='flex items-center justify-between'>
                <div className='w-[40px] h-[40px] object-contain  rounded-full border flex items-center justify-center '>
                    <img src="images/shopping-cart.png" alt="ico" className='object-contain  rounded-full' />
                </div>
                <img src="images/red-graph.png" alt="green-graph" className="w-[104px] h-[40px] object-cover" />
            </div>

            <p className='text-[#898989] text-[18pxpx]' >Average Sale</p>
            <h4 className='text-[#3A3F51] font-bold'>1567</h4>

            <div className='flex items-center justify-between'>
                <div  className='flex items-center justify-between px-[6px] py-[4px] w-[70px] bg-red-50 rounded-full overflow-hidden' >
                <img src="images/trending-down.png" alt="ico" className='w-[20px] h-[10px] object-contain' />
                    <p className='text-[12px] text-red-500'>23,5%</p>
                </div>
                 <span className='text-[#606060] text-[12px] tracking-tighter '>vs. previous month</span>
            </div>
            
        </div>

        <div className='flex flex-col justify-between gap-[10px] p-4 rounded-md bg-white border border-[#EDF2F7] shadow-sm'>
            
            <div className='flex items-center justify-between'>
                <div className='w-[40px] h-[40px] object-contain  rounded-full border flex items-center justify-center '>
                    <img src="images/coin.png" alt="ico" className='object-contain  rounded-full' />
                </div>
                <img src="images/green-graph.png" alt="green-graph" className="w-[104px] h-[40px] object-cover" />
            </div>

            <p className='text-[#898989] text-[18pxpx]' >Total Income</p>
            <h4 className='text-[#3A3F51] font-bold'>$350.000</h4>

            <div className='flex items-center justify-between'>
                <div  className='flex items-center justify-between px-[6px] py-[4px] w-[70px] bg-cyan-50 rounded-full overflow-hidden' >
                <img src="images/trending-up.png" alt="ico" className='w-[20px] h-[10px] object-contain' />
                    <p className='text-[12px] text-[#34CAA5]'>23,5%</p>
                </div>
                 <span className='text-[#606060] text-[12px] tracking-tighter '>vs. previous month</span>
            </div>
            
        </div>

        
    </div>
  )
}