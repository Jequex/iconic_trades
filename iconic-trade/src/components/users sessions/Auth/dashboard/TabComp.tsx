import { Tabs, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import React from "react";
import Payment from "../payment/Payment";
import Overview from "../overview/Overview";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Label } from "@/components/ui/Label";

type Props = {};

function TabComp({}: Props) {
  return (
    <div>
      <Tabs defaultValue="overview" className="w-full ">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          {/* <TabsTrigger value="security">Security</TabsTrigger> */}
          <TabsTrigger value="payment">Payment</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Overview />
        </TabsContent>

        <TabsContent value="account">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Make changes to your account here. Click save when you&apos;re done.
          </p>
        </TabsContent>

        <TabsContent value="payment">
          <Payment />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default TabComp;
