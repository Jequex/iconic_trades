import Image from "next/image";
import React from "react";
import FrequentlyAQ from "../faq/FrequentlyAQ";

type Props = {};

function WorkSection({}: Props) {
  return (
    <section className=" min-h-screen bg-[#faf8f4] w-full flex items-center justify-center">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="text-slate-900 w-full  ">
          <h3 className="text-base uppercase text-slate-900 ">
            LET YOUR
            <span className="px-1 font-bold">FUNDS</span>
          </h3>
          <h3 className="text-2xl font-bold pb-3">Work for you</h3>
          <p className=" text-slate-800 ">
            Don&apos;t go it alone when it comes to investing. At Iconic Trade,
            our team of experts is here to help you make smart investment
            decisions that lead to long-term growth and financial success.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
