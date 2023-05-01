import React from "react";

type Props = {
  bg: string;
};

function Swippper({ bg }: Props) {
  return (
    <div className={`${bg} flex items-center justify-center h-full w-full`}>
      Swippper
    </div>
  );
}

export default Swippper;
