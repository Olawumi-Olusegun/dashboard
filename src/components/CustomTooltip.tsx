import React from 'react'

type Props = {}

export default function CustomTooltip({}: Props) {
  return (
    <>
    <div className=" bg-gray-100 py-2 flex flex-col justify-center sm:py-2">
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="group cursor-pointer relative inline-block border-b border-gray-400 w-28 text-center">Hover over me
        <div className="opacity-0 w-28 bg-[#090C2C] text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full -left-1/2 ml-14 px-3 pointer-events-none">
            $84.000
            <svg className="absolute text-[#090C2C] h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" ><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}