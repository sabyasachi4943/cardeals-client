import React from "react";
import Category from "./Category";

const CarCategories = () => {
  const CategoriesData = [
    {
      id: 1,
      type: "Sedan",
      description:
        "This service company gives the best deal while traveling they introduced me to some great places to go for dinner. Loved it.",
      img: `https://www.motortrend.com/uploads/sites/10/2015/11/2016-audi-a6-prestige-sedan-angular-front.png`,
      location: "Malibu",
    },
    {
      id: 2,
      type: "SUV",
      description:
        "Before using their services i was not able to think that all the trouble I have to go through for selling a car. I am so satisfied by having their services. I recommend everyone to use their services.",
      img: `https://www.pngpix.com/wp-content/uploads/2016/06/PNGPIX-COM-Black-Mercedes-Benz-G-Class-SUV-Car-PNG-Image.png`,
      location: "California",
    },
    {
      id: 3,
      type: "Sports",
      description:
        "The services are great and their services helped me a lot to find best car within my budget. I am very thankful to them.",
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
