import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import OrderModal from '../../SpecificCategoryCars/OrderModal/OrderModal';
import AdvertisementCards from './AdvertisementCards';

const Advertisements = () => {
  // const AdvertisedCars = useLoaderData();
  const [buyCar, setBuyCar] = useState(null);
  
  const {
    data: advertisedCars = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["advertisedCars"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/ads", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

 


  return (
    <div className="text-center py-20">
      <div className="my-2">
        <h1 className="test-center">advertise section</h1>
      </div>
      {advertisedCars && (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-3">
          {advertisedCars.map((cars) => (
            <AdvertisementCards
              key={cars._id}
              cars={cars}
              setBuyCar={setBuyCar}
            ></AdvertisementCards>
          ))}
          {buyCar && (
            <OrderModal buyCar={buyCar} setBuyCar={setBuyCar}></OrderModal>
          )}
        </div>
      )}
    </div>
  );
};

export default Advertisements;