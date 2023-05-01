const InvestSection = () => {
  const cards = [
    {
      id: "1",
      title: "Agro-investment",
      body: " Iconic Trade invests in agriculture to take advantage of the growing demand for food globally. The company seeks to invest in sustainable agriculture projects that promote food security, enhance rural livelihoods and protect the environment.",
      img: "",
    },
    {
      id: "2",
      title: "Real Estate",
      body: " Iconic Trade invests in real estate to take advantage of the growing demand for property globally. The company seeks to invest in commercial and residential real estate projects that provide attractive rental yields and potential capital appreciation.",
      img: "",
    },
    {
      id: "3",
      title: "Crypto trading",
      body: "  Iconic Trade invests in cryptocurrency to take advantage of the growing adoption of digital assets globally. The company seeks to invest in high-growth cryptocurrency projects that have strong fundamentals and potential for long-term growth.      ",
      img: "",
    },
    {
      id: "4",
      title: "Forex trading",
      body: " Iconic Trade invests in the foreign exchange market to take advantage of currency fluctuations globally. The company seeks to invest in currencies with high liquidity and potential for profitable trades.",
      img: "",
    },
  ];

  return (
    <section className=" min-h-screen w-full flex items-center justify-center">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="text-white  ">
          <h3 className="text-base uppercase text-slate-200 ">
            smartest way to
            <span className="px-1 font-bold">Invest</span>
          </h3>
          <h3 className="text-2xl font-bold pb-3">for Long-term Growth</h3>
          <p className=" text-slate-300">
            Don&apos;t go it alone when it comes to investing. At Iconic Trade,
            our team of experts is here to help you make smart investment
            decisions that lead to long-term growth and financial success.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-3 my my-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="block flex-1 p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-xl font-bold tracking-tight text-slate-200">
                {card.title}
              </h5>
              <p className="font-normal text-slate-300 ">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestSection;
