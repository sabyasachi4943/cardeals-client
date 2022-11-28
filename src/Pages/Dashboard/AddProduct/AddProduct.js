import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddProduct = () => {

  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageHostKey = process.env.REACT_APP_imgbb_key;
  console.log(imageHostKey);

  const navigate = useNavigate();

  const handleAddProduct = (data) => {
     let d = new Date();
     const image = data.image[0];
     const formData = new FormData();
     formData.append("image", image);
     const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
     fetch(url, {
       method: "POST",
       body: formData,
     })
       .then((res) => res.json())
       .then((imgData) => {
         if (imgData.success) {
           console.log(imgData.data.url);
           const car = {
             sellerName: data.sellerName,
             name: data.name,
             type: data.type,
             originalPrice: data.originalPrice,
             resalePrice: data.resalePrice,
             image: imgData.data.url,
             yearsOfUse: data.yearsOfUse,
             postedAt: d.toString(),
             location: data.location,
             phone: data.phone,
             description: data.description,
           };

           // save product information to the database
           fetch("http://localhost:5000/products", {
             method: "POST",
             headers: {
               "content-type": "application/json",
               authorization: `bearer ${localStorage.getItem("accessToken")}`,
             },
             body: JSON.stringify(car),
           })
             .then((res) => res.json())
             .then((result) => {
               console.log(result);
               toast.success(`${data.name} is added successfully`);
               navigate("/dashboard/products");
             });
         }
       });
   };


  return (
    <div className="h-[800px] items-center flex flex-wrap mb-15">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Add Product</h2>
        <form onSubmit={handleSubmit(handleAddProduct)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              readOnly
              value={user?.displayName}
              {...register("sellerName", {
                required: "Name is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.sellerName && (
              <p className="text-red-500">{errors.sellerName.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Original Price</span>
            </label>
            <input
              type="text"
              {...register("originalPrice", {
                required: "Original Price is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.originalPrice && (
              <p className="text-red-500">{errors.originalPrice.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Resale Price</span>
            </label>
            <input
              type="text"
              {...register("resalePrice", {
                required: "Resale Price is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.resalePrice && (
              <p className="text-red-500">{errors.resalePrice.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <select
              {...register("type", { required: true })}
              className="input input-bordered w-full max-w-xs"
            >
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="sports">
                Sports
              </option>
            </select>
            {errors.name && (
              <p className="text-red-500">{errors.role.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Condition or Years of use</span>
            </label>
            <input
              type="number"
              {...register("yearsOfUse", {
                required: "years Of Use is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.yearsOfUse && (
              <p className="text-red-500">{errors.yearsOfUse.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Car Photo</span>
            </label>
            <input
              type="file"
              {...register("image", {
                required: "Photo is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.img && <p className="text-red-500">{errors.img.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              {...register("location", {
                required: "Location is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.location && (
              <p className="text-red-500">{errors.location.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="text"
              {...register("phone", {
                required: "Phone Number is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              {...register("description", {
                required: "Description is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.description && (
              <p className="text-red-500">{errors.description.message}</p>
            )}
          </div>

          <input
            className="btn btn-accent bg-warning text-black w-full mt-4"
            value="Add Product"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;