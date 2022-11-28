import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Orders = () => {

  const { user } = useContext(AuthContext);
  
  const url = `http://localhost:5000/orders?email=${user?.email}`;
  
   const { data: orders = [] } = useQuery({
     queryKey: ["orders", user?.email],
     queryFn: async () => {
       const res = await fetch(url, {
         headers: {
           authorization: `bearer ${localStorage.getItem("accessToken")}`,
         },
       });
       const data = await res.json();
       console.log(data);
       return data;
     },
   });

  return (
    <div>
      <h3 className="text-3xl mb-5">My Orders</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Buyer Name</th>
              <th>Car Name</th>
              <th>Car price</th>
              <th>Seller Name</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders?.map((order, i) => (
                <tr key={order._id}>
                  <th>{i + 1}</th>
                  <td>{order.buyerName}</td>
                  <td>{order.carName}</td>
                  <td>{order.carPrice}</td>
                  <td>{order.sellerName}</td>
                  <td>
                    {/* {order.price && !order.paid && (
                      <Link to={`/dashboard/payment/${order._id}`}>
                        <button className="btn btn-primary btn-sm">Pay</button>
                      </Link>
                    )}
                    {order.price && order.paid && (
                      <span className="text-green-500">Paid</span>
                    )} */}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;