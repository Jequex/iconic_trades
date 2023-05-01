import React from "react";
import Card from "./Card";

type Props = {};

function Cards({}: Props) {
  const investmentPlans = [
    {
      id: "1",
      name: "Package one",
      details:
        " Make changes to your profile here. Click save when you&apos;re done Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci sequi corrupti rerum ab doloremque cum.",
      duration: "30 days",
      day: 30,
    },
    {
      id: "2",
      name: "Package two",
      details:
        " Make changes to your profile here. Click save when you&apos;re done Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci sequi corrupti rerum ab doloremque cum.",
      duration: "60 days",
      day: 60,
    },
    {
      id: "3",
      name: "Package three",
      details:
        " Make changes to your profile here. Click save when you&apos;re done Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci sequi corrupti rerum ab doloremque cum.",
      duration: "80 days",
      day: 80,
    },
    {
      id: "4",
      name: "Package four",
      details:
        " Make changes to your profile here. Click save when you&apos;re done Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci sequi corrupti rerum ab doloremque cum.",
      duration: "120 days",
      day: 120,
    },
  ];

  return (
    <>
      <h3 className="text-base uppercase text-slate-200 font-bold mt-2 ">
        Choose a plan
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 w-full gap-1 py-1">
        {investmentPlans.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </div>
    </>
  );
}

export default Cards;
