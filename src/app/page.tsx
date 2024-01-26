"use client"

import BarChart from "@/components/BarChart";
import CardContent from "@/components/CardContent";
import LastOrder from "@/components/LastOrder";
import PageTitle from "@/components/PageTitle";
import RevenueCard from "@/components/RevenueCard";
import TopPlatforms from "@/components/TopPlatforms";
import Link from "next/link";
import { useState } from "react";


export default function Home() {

  const [openViewAll, setOpenViewAll] = useState(false);


  return (
    <div className="p-2 md:p-5 flex flex-col gap-5 w-full">
      
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-[1fr_456px]">
       
        <CardContent className=" bg-white h-auto lg:h-[374px] gap-0 flex flex-col">
          
          <div className="flex items-center justify-between">
            <p className="font-semibold">Sales Trend</p>

            <div onClick={() => setOpenViewAll(prev => !prev)} className="relative flex items-center p-1 text-xs cursor-pointer border rounded-full">
              <span className="p-1">Sort By:</span>
              <div className="flex items-center ">
                <span>Weekly</span>
                <span>
                  <img src="images/arrow-down.png" alt=" arrow-down" className="w-5 h-5 object-contain" />
                </span>
              </div>

            <div className={`absolute transition-all duration-300 flex flex-col gap-y-1 top-8 rounded-md shadow-md p-1 border right-0 bg-white  w-full ${openViewAll ? "opacity-100 visible" : "opacity-0 invisible"}`}>
              <p className="cursor-pointer hover:bg-gray-100 text-xs p-1.5 rounded-md ">Date</p>
              <p className="cursor-pointer hover:bg-gray-100 text-xs p-1.5 rounded-md ">Location</p>
            </div>

            </div>

          </div>

          <BarChart />
        </CardContent>

        <CardContent className="p-0 md:p-0 border-none h-[374px] shadow-none">
            <RevenueCard />
        </CardContent>

      </section>
      
      <section className="grid grid-cols-1 gap-4 transition-all  lg:grid-cols-[minmax(422px,_1fr)_456px]">
       
        <CardContent className="py-2 bg-white grid-cols-4 ">
          <div className="flex items-center justify-between space-x-4 pt-[11px] pb-[15px]">
            <PageTitle className="p-0 text-md font-semibold text-[#26282C]">
              Last Orders
            </PageTitle>
            <Link href={`#`} className="text-[#34CAA5]">See All</Link>
          </div>
          <LastOrder />
        </CardContent>

        <CardContent className="py-2 bg-white max-h-[456px] overflow-y-scroll no-scrollbar">
          <div className="flex items-center justify-between space-x-4 pt-[11px] pb-[15px]">
            <PageTitle className="p-0 text-md font-semibold text-[#26282C]">
              Top Platforms
            </PageTitle>
            <Link href={`#`} className="text-[#34CAA5]">See All</Link>
          </div>
          <TopPlatforms />
        </CardContent>


      </section>

    </div>
  );
}
