import React from "react";
import { Link } from "react-router-dom";

const SpecificCategoryCarCard = ({ cars, setBuyCar }) => {
  const {
    _id,
    carId,
    img,
    name,
    type,
    typecode,
    location,
    resalePrice,
    originalPrice,
    yearsOfUse,
    postedAt,
    sellerName,
  } = cars;
  return (
    <div>
      <div className="card w-86 bg-base-100 shadow-xl m-8 ">
        <figure>
          <img src={img} alt="car" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{type}</div>
          </h2>
          <p>
            <span className="font-bold"> Years of use: </span>
            {yearsOfUse}
          </p>
          <p>
            <span className="font-bold">location: </span>
            {location}
          </p>
          <p>
            <span className="font-bold">Resale price: </span>$
            {resalePrice}
          </p>
          <p>
            <span className="font-bold">Original price: </span>$
            {originalPrice}
          </p>
          <p>
            <span className="font-bold">Seller Name: </span>
            {sellerName}
          </p>
          <div className="card-actions justify-end">
            <div className="font-bold">Posted at: {postedAt}</div>
            {/* <div className="card-actions">
              <Link to={`/checkout/${_id}`} className="text-decoration-none">
                <button className="btn btn-warning">buy now</button>
              </Link>
            </div> */}
            <label htmlFor="order-modal" className="btn btn-warning"
              onClick={()=> setBuyCar(cars)}
            >
              buy now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificCategoryCarCard;
