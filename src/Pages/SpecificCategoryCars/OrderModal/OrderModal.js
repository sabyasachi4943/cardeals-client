import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const OrderModal = ({ buyCar, setAllCars, setBuyCar }) => {
 
  console.log(buyCar);
 
  const {
    name,
    _id,
    carId,
    type,
    typecode,
    location,
    resalePrice: carPrice,
    yearsOfUse,
    postedAt,
    sellerName,
  } = buyCar;

  
  const { user } = useContext(AuthContext);

  const handleOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const buyerName = form.userName.value;
    const buyerEmail = form.userEmail.value;
    const carName = form.carName.value;
    const carPrice = form.carPrice.value;
    const userPhone = form.userPhone.value;
    const meetingLocation = form.location.value;

    let d = new Date();

    const buyerOrder = {
      orderCarId: _id,
      buyerName,
      buyerEmail,
      carName,
      carPrice,
      userPhone,
      meetingLocation,
      sellerName,
      createdAt: d.toString(),
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(buyerOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setBuyCar(null);
          console.log("pass")
          
          toast.success("confirmed order")
        } else {
          toast.error(data.message);
        }
      });
    form.reset();
  };

  return (
    <>
      <input type="checkbox" id="order-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="order-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleOrder} className="grid grid-cols-1 gap-3 mt-10">
            <label className="label-alt">
              <span className="label-text">User Name</span>
            </label>
            <input
              name="userName"
              type="text"
              value={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <label className="label-alt">
              <span className="label-text">Email Address</span>
            </label>
            <input
              name="userEmail"
              type="email"
              value={user?.email}
              disabled
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <label className="label-alt">
              <span className="label-text">Car Name</span>
            </label>
            <input
              name="carName"
              type="text"
              value={name}
              disabled
              placeholder="Car Name"
              className="input w-full input-bordered"
            />
            <label className="label-alt">
              <span className="label-text">Car Price</span>
            </label>
            <input
              name="carPrice"
              type="text"
              value={carPrice}
              disabled
              placeholder="Car Price"
              className="input w-full input-bordered"
            />
            <input
              name="userPhone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Meeting Location"
              className="input w-full input-bordered"
            />
            <br />
            <label htmlFor="order-modal" className="btn">
              <input
                className="btn btn-accent w-full"
                type="submit"
                value="Submit"
              />
            </label>
          </form>
        </div>
      </div>
    </>
  );
};

export default OrderModal;
