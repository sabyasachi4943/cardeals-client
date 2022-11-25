import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { type, description, img, id } = category;
  return (
    <div className="card w-86 bg-base-100 shadow-xl border-2 border-gray-500">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{type}</h2>
        <p>{description}</p>
        <div className="card-actions">
            <Link to={`/category/${id}`} className="text-decoration-none">
              <button className="btn btn-warning">
              See All
              </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
