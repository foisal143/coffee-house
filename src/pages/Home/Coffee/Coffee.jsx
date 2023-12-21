import React from 'react';
import { FaEye, FaPencilAlt, FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Coffee = ({ coffee, handlerDelete }) => {
  const { _id, name, chef, supplier, taste, category, details, image } = coffee;

  return (
    <div className="card  pe-5 card-side bg-slate-100  shadow-md">
      <figure className="w-1/3 h-full">
        <img className="w-full h-full me-5" src={image} alt={name} />
      </figure>
      <div className="  w-full flex justify-between ">
        <div>
          <h2 className="card-title">Name: {name}</h2>
          <p>
            <span className="text-xl font-semibold">Chef:</span> {chef}
          </p>
          <p>
            <span className="text-xl font-semibold">Category:</span> {category}
          </p>
        </div>
        <div className="flex flex-col py-2 gap-5">
          <Link to={`/${_id}`}>
            <button className="btn bg-[#E3B577] hover:bg-[#E3B577] text-white ">
              <FaEye></FaEye>
            </button>
          </Link>
          <Link to={`updatecoffee/${_id}`}>
            <button className="btn bg-[#3C393B] text-white hover:bg-[#3C393B]">
              <FaPencilAlt></FaPencilAlt>
            </button>
          </Link>
          <button onClick={() => handlerDelete(_id)} className="btn btn-error">
            <FaRegTrashAlt></FaRegTrashAlt>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
