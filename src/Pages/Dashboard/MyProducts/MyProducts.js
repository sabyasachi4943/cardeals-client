import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        `https://cardeals-server.vercel.app/products?name=${user?.displayName}`,
      );
      const data = await res.json();
      return data;
    },
  });

  refetch();

  const handleAdvertise = (product) => {
    console.log(product);

    fetch(`https://cardeals-server.vercel.app/ads/${product._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success(`${product.name} is advertised successfully`);
        refetch();
      });
  };

  return (
    <div>
      <div>
        <h2 className="text-3xl">All Products</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Resale Price</th>
                <th>Type</th>
                <th>Advertise</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, i) => (
                <tr key={product._id}>
                  <th>{i + 1}</th>
                  <td>{product.name}</td>
                  <td>{product.resalePrice}</td>
                  <td>{product.type}</td>
                  <td>
                    {product?.advertised !== "advertised" && (
                      <button
                        onClick={() => handleAdvertise(product)}
                        className="btn btn-xs btn-primary"
                      >
                        Advertise
                      </button>
                    )}
                  </td>
                  <td>
                    <button className="btn btn-xs btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyProducts;
