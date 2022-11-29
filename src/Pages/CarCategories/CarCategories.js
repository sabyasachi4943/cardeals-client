import React from "react";
import Category from "./Category";

const CarCategories = () => {
  const CategoriesData = [
    {
      id: 1,
      type: "sedan",
      description:
        "A sedan or saloon (British English) is a passenger car in a three-box configuration with separate compartments for an engine, passengers, and cargo..",
      img: `https://www.motortrend.com/uploads/sites/10/2015/11/2016-audi-a6-prestige-sedan-angular-front.png`,
      location: "Malibu",
    },
    {
      id: 2,
      type: "suv",
      description:
        "A sport utility vehicle or SUV is a car classification that combines elements of road-going passenger cars with features from off-road vehicles, such as raised ground clearance and four-wheel drive..",
      img: `https://www.pngpix.com/wp-content/uploads/2016/06/PNGPIX-COM-Black-Mercedes-Benz-G-Class-SUV-Car-PNG-Image.png`,
      location: "California",
    },
    {
      id: 3,
      type: "sports",
      description:
        "A sports car is a car designed with an emphasis on dynamic performance, such as handling, acceleration, top speed, the thrill of driving and racing capability. Sports cars originated in Europe in the early 1900s and are currently produced by many manufacturers around the world.",
      img: `https://pluspng.com/img-png/racing-cars-png-hd-pngpix-com-porsche-cayman-gt4-clubsport-racing-car-2122.png`,
      location: "Texas",
    },
  ];

  return (
    <div>
      <section className="my-16">
        <div className="text-center pb-8">
          <div>
            <h4 className="text-xl text-primary font-bold uppercase">
              Car Categories
            </h4>
            <h2 className="text-3xl">We offer Three car categories</h2>
          </div>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-3">
          {CategoriesData.map((category) => (
            <Category key={category.id} category={category}></Category>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CarCategories;
