import React from "react";
import CarCategories from "../../CarCategories/CarCategories";
import AdvertisementCards from "../AdvertisementCards/AdvertisementCards";
import Banner from "../Banner/Banner";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <AdvertisementCards></AdvertisementCards>
      <CarCategories></CarCategories>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
