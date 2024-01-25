"use client"

import BarChart from "@/components/BarChart";
import CardContent from "@/components/CardContent";
import LastOrder from "@/components/LastOrder";
import PageTitle from "@/components/PageTitle";
import RevenueCard from "@/components/RevenueCard";
import TopPlatforms from "@/components/TopPlatforms";
import Link from "next/link";


export default function Home() {
  return (
    <div className="p-2 md:p-5 flex flex-col gap-5 w-full">
      
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-[1fr_456px]">
       
        <CardContent className="py-2 px-0">
          <p className="px-5 font-semibold">Overview</p>
          <BarChart />
        </CardContent>

        <CardContent className="p-2 md:p-4 ">

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
