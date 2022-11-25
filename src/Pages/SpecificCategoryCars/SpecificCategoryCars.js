import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SpecificCategoryCarCard from "./SpecificCategoryCarCard";

const SpecificCategoryCars = () => {
  const categoryAllCars = useLoaderData();


  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-3">
      {categoryAllCars.map((cars) => (
        <SpecificCategoryCarCard
          key={cars._id}
          cars={cars}
        ></SpecificCategoryCarCard>
      ))}
      all cars in category.
    </div>
  );
};

export default SpecificCategoryCars;
