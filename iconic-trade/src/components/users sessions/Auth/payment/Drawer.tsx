import React, { useState } from "react";
import Modal from "./Modal";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheet";
import { Button } from "@/components/ui/Button";
type Props = {};

function Drawer({}: Props) {
  const [steps, setSteps] = useState(1);
  const handleStep = () => setSteps((e) => e + 1);
  return (
    <div className="flex flex-col space-y-8">
      <SheetContent position="bottom" size="content">
        <SheetHeader>
          <SheetTitle className="text-left">Fund & Trade</SheetTitle>
          <SheetDescription className="text-left">
            {steps === 1
              ? "Enter the amount you want to start your investment journey with"
              : "Choose a plan suitable for your financial goal"}
          </SheetDescription>
        </SheetHeader>
        <Modal handleStep={handleStep} steps={steps} />
      </SheetContent>
    </div>
  );
}

export default Drawer;
