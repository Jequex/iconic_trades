import React from "react";
import Hero from "./Guest/hero/Hero";
import InvestSection from "./Guest/invest/InvestSection";
import WorkSection from "./Guest/work/WorkSection";
import FrequentlyAQ from "./Guest/faq/FrequentlyAQ";

type Props = {};

function Guest({}: Props) {
  return (
    <>
      <Hero />
      <InvestSection />
      <WorkSection />
      <FrequentlyAQ />
    </>
  );
}

export default Guest;
