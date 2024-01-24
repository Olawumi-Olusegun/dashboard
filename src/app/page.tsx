"use client"

import BarChart from "@/components/BarChart";
import Card from "@/components/Card";
import CardContent from "@/components/CardContent";
import CustomTooltip from "@/components/CustomTooltip";
import PageTitle from "@/components/PageTitle";
import SalesCard from "@/components/SalesCard";
import { Activity, CreditCard, DollarSign, LucideIcon, User } from "lucide-react";

type CardProps = {
  label: string;
  icon: LucideIcon;
  amount: string;
  description: string;
}

type SalesCardProps = {
  name: string;
  email: string;
  saleAmount: string;
}

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$45,231.89",
    description: "$45,231.89",
    icon: DollarSign,
  },
  {
    label: "Subscription",
    amount: "+2350",
    description: "+180.1% from last week",
    icon: User,
  },
  {
    label: "Sales",
    amount: "+12,234",
    description: "19% from last week",
    icon: CreditCard,
  },
  {
    label: "Active Now",
    amount: "+573",
    description: "+201 since last hour",
    icon: Activity,
  },
];

const userSalesData: SalesCardProps[] = [
  {
    name: "Olivia Martin",
    email: "olivia.marthin@email.com",
    saleAmount: "+$1,999.00"
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    saleAmount: "+$1,999.00"
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$1,999.00"
  },
  {
    name: "William Kim",
    email: "william.kim@email.com",
    saleAmount: "+$1,999.00"
  },
];

export default function Home() {
  return (
    <div className="p-5 flex flex-col gap-5 w-full">
      <section className="grid grid-col-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        { cardData.map((item, index) => <Card cardItem={item} key={index} /> ) }
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
       
        <CardContent className="py-2">
          <p className="p-0 font-semibold">Overview</p>
          <BarChart />
        </CardContent>

        <CardContent className="py-2 flex justify-between gap-2">
          <PageTitle className="p-0 text-md font-semibold">
            Recent Sales
          </PageTitle>
          <p className="text-sm">You made 265 sale this month </p>
          {
            userSalesData.map((item, index) => <SalesCard saleData={item} key={index} /> )
          }          
        </CardContent>

        <CardContent>
          <CustomTooltip />
        </CardContent>

      </section>
    </div>
  );
}
