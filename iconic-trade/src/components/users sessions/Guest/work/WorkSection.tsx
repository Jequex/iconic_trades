import Image from "next/image";
import React from "react";
import FrequentlyAQ from "../faq/FrequentlyAQ";

type Props = {};

function WorkSection({}: Props) {
  return (
    <section className="panel min-h-screen relative bg-[#f1f1f3] w-full  flex items-end pb-6 px-4 md:pb-24">
      <div className="max-w-screen-xl mx-auto w-full relative z-10 ">
        <div className="text-slate-900 w-full bg-[rgba(241,241,243,0.6)] backdrop-blur rounded-sm shadow-md shadow-slate-800/40 p-4 md:p-6 max-w-prose  ">
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

      <Image
        src="/images/work.jpg"
        alt=""
        fill
        className=" object-cover md:object-contain"
      />
    </section>
  );
}

export default WorkSection;
