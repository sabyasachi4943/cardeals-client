import React from "react";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const TestimonialsData = [
    {
      id: 1,
      name: "Sam walton",
      description:
        "Before using their services i was not able to think that all the trouble I have to go through for selling a car. I am so satisfied by having their services. I recommend everyone to use their services.",
      img: `https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=160`,
      location: "California",
    },
    {
      id: 2,
      name: "Walter Smith",
      description:
        "The services are great and their services helped me a lot to find best car within my budget. I am very thankful to them.",
      img: `https://images.pexels.com/photos/7562139/pexels-photo-7562139.jpeg?auto=compress&cs=tinysrgb&w=160`,
      location: "Texas",
    },
    {
      id: 3,
      name: "Alex Buffet",
      description:
        "This service company gives the best deal while traveling they introduced me to some great places to go for dinner. Loved it.",
      img: `https://images.pexels.com/photos/977418/pexels-photo-977418.jpeg?auto=compress&cs=tinysrgb&w=160`,
      location: "Malibu",
    },
  ];

  return (
    <section className="my-16">
      <div className=" text-center pb-8">
        <div>
          <h4 className="text-xl text-primary font-bold uppercase">
            Testimonial
          </h4>
          <h2 className="text-3xl">What Our Users Says</h2>
        </div>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {TestimonialsData.map((testimonial) => (
          <Testimonial
            key={testimonial.id}
            testimonial={testimonial}
          ></Testimonial>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
