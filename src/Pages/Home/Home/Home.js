import { useQuery } from "@tanstack/react-query";
import React from "react";
import CarCategories from "../../CarCategories/CarCategories";
import AdvertisementCards from "../AdvertisementCards/AdvertisementCards";
import Advertisements from "../AdvertisementCards/Advertisements";
import Banner from "../Banner/Banner";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  const {
    data: advertisedCars = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["advertisedCars"],
    queryFn: async () => {
      const res = await fetch("https://cardeals-server.vercel.app/ads", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  return (
    <div className="mx-5">
      <Banner></Banner>
      {advertisedCars.length > 0 && <Advertisements></Advertisements>}
      <CarCategories></CarCategories>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
