import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
import OrderModal from "./OrderModal/OrderModal";
import SpecificCategoryCarCard from "./SpecificCategoryCarCard";

const SpecificCategoryCars = () => {
  const categoryAllCars = useLoaderData();
  // const [allCars, setAllCars] = useState(categoryAllCars);
  const [buyCar, setBuyCar] = useState(null);

    //  if (isLoading) {
    //    return <Loading></Loading>;
    //  }

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-3">
      {categoryAllCars.map((cars) => (
        <SpecificCategoryCarCard
          key={cars._id}
          cars={cars}
          setBuyCar={setBuyCar}
          // setAllCars={setAllCars}
        ></SpecificCategoryCarCard>
      ))}
      {buyCar && (
        <OrderModal buyCar={buyCar} setBuyCar={setBuyCar}></OrderModal>
      )}
    </div>
  );
};

export default SpecificCategoryCars;
