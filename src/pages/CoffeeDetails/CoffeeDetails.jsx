import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, image } = coffee;
  return (
    <div className="min-h-[calc(100vh-80px)] flex justify-center items-center">
      <div className="card overflow-hidden  md:w-1/2 min-h-[calc(100vh-50vh)]  md:pe-5 md:card-side bg-slate-100  shadow-md">
        <img className="md:w-1/3 min-h-full md:me-5" src={image} alt={name} />

        <div className="  w-full p-5  ">
          <div>
            <h2 className="card-title">Name: {name}</h2>
            <p>
              <span className="text-xl font-semibold">Chef:</span> {chef}
            </p>
            <p>
              <span className="text-xl font-semibold">Category:</span>{' '}
              {category}
            </p>
            <p>
              <span className="text-xl font-semibold">Supplier:</span>{' '}
              {supplier}
            </p>
            <p>
              <span className="text-xl font-semibold">Taste:</span> {taste}
            </p>
            <p>
              <span className="text-xl font-semibold">Details:</span> {details}
            </p>
          </div>
          <div className="mt-12 w-1/2">
            <Link to="/">
              <button className="btn bg-[#E3B577] hover:bg-[#E3B577] text-white flex  items-center gap-2">
                <FaArrowLeft></FaArrowLeft> Go Back Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
