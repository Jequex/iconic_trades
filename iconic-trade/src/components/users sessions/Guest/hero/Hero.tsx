import React from "react";

type Props = {};

function Hero({}: Props) {
  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="text-white py-6 max-w-screen-xl px-4 mx-auto">
        <h1 className="font-bold text-3xl text-slate-200 sm:text-4xl md:text-5xl lg:text-6xl max-w-prose leading-snug">
          Iconic trade, the platform for investors by investors.
        </h1>
        <p className="py-4 te text-slate-300">
          Platform built to help you invest confidently and achieve financial
          success with a team of experts providing personalized investment
          solutions tailored to your specific needs. With Iconic Trade, you can
          trust us to help you navigate the complexities of investing and
          achieve your financial goals.
        </p>
      </div>
    </section>
  );
}

export default Hero;
