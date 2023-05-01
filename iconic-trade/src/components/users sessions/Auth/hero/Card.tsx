import { investmentLaps } from "@/redux/features/packageSlice";
import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import React from "react";
import { useDispatch } from "react-redux";

type Props = { item: { day: number; details: string; name: string } };

function Card({ item }: Props) {
  const dispatch = useDispatch();

  const { day, details, name } = item;
  const handleClick = () => {
    dispatch(investmentLaps({ day }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-slate-800 hover:bg-slate-700 h-24 rounded-sm p-3 border border-slate-200/10 hover:cursor-pointer">
          <p className="text-slate-200 text-base font-bold">Package</p>
          <p className=" text-emerald-600 text-xl font-bold">+18%</p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] absolute bottom-1/2 translate-y-1/2">
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>{details}</DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button onClick={handleClick} type="submit">
            Lets go..
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default Card;
