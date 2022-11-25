import React from "react";

const Category = ({ category }) => {
  const { type, description, img, location } = category;
  return (
    // <div className="card bg-base-100 shadow-xl">
    //   <figure className="px-10 pt-10">
    //     <img src={img} alt="cars" className="rounded-xl" />
    //   </figure>
    //   <div className="card-body items-center text-center">
    //     <h2 className="card-title">{type}</h2>
    //     <p>{description}</p>
    //     <button className="btn btn-info">see all</button>
    //   </div>
    // </div>
    <div className="card w-96 bg-base-100 shadow-xl border-2 border-gray-500">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{type}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn btn-primary">see all</button>
        </div>
      </div>
    </div>
  );
};

export default Category;
