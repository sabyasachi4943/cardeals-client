import React from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={`https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F-OTCEAH-9nGE%2FVcLaPiFYrLI%2FAAAAAAAAE9o%2FGBNqcsbN-JM%2Fs1600%2Faudi_PNG1742.png&f=1&nofb=1&ipt=440f378812e90e37852a722cfa2d60a50484c723d8d3581270e2e722df00d29b&ipo=images`}
          className="rounded-lg lg:w-1/2 shadow-2xl"
          alt=""
        />
        <div>
          <h1 className="text-5xl font-bold">Car Deals!</h1>
          <p className="py-6">
            Best car deals you can get. You can sell and buy cars in one place.
          </p>
          <PrimaryButton>Getting Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
