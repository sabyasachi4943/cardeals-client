import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  const img = "https://www.elegantthemes.com/blog/wp-content/uploads/2017/07/404-error.png";
  return (
    <div class="bg-gray-200 w-full px-16 md:px-0 h-screen flex items-center justify-center">
      <div class="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
        <p class="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">
          404
        </p>
        <p class="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">
          You are at the end of internet.
        </p>
        <img src={img} alt="" />
        <p class="text-gray-500 mt-8 py-2 border-y-2 text-center">
          <Link to="/">Home</Link>
        </p>
      </div>
    </div>
  );
};

export default Error;