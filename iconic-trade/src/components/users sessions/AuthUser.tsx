import React from "react";
import TabComp from "./Auth/dashboard/TabComp";
import Hero from "./Auth/hero/Hero";
import Cards from "./Auth/hero/Cards";

type Props = {};

function AuthUser({}: Props) {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <Hero />
      {/* <Cards /> */}
    </div>
  );
}

export default AuthUser;
