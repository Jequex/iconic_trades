import { Button } from "@/components/ui/Button";
import React, { useState } from "react";
// import Modal from "./Modal";
import Drawer from "./Drawer";
import { Sheet, SheetTrigger } from "@/components/ui/Sheet";

type Props = {};

function Payment({}: Props) {
  const [open, setopen] = useState(false);

  const handleClose = () => {
    setopen(false);
  };

  return (
    <Sheet>
      <div className="py-5 ">
        <div className="w-full flex justify-end  ">
          <div className="gap-2 grid grid-cols-2">
            <Button
              size="sm"
              variant="ghost"
              // onClick={() => {
              //   setopen(true);
              // }}
            >
              Withdraw
            </Button>

            <SheetTrigger asChild>
              <Button
                size="sm"
                onClick={() => {
                  setopen(true);
                }}
              >
                Deposit
              </Button>
            </SheetTrigger>
          </div>
        </div>
        <Drawer />
        {/* <Drawer handleClose={handleClose} open={open} /> */}
      </div>
    </Sheet>
  );
}

export default Payment;
