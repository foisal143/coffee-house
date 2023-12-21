import React, { useEffect, useState } from 'react';
import { FaCoffee } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Coffee from '../Coffee/Coffee';
import Swal from 'sweetalert2';

const Coffees = () => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/coffees')
      .then(res => res.json())
      .then(data => setCoffees(data));
  }, [coffees]);

  //  handler delete button
  const handlerDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deleteCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Coffee has been deleted.',
                icon: 'success',
              });
              const remaning = coffees.filter(coffee => coffee._id !== id);
              setCoffees(remaning);
            }
          });
      }
    });
  };
  return (
    <div className="my-20 ">
      <div className="text-center">
        <h3 className="my-5 text-3xl font-bold text-[#E3B577]">
          Our Popular Products
        </h3>
        <Link
          to="/addcoffee"
          className="btn flex gap-2 w-fit mx-auto items-center bg-[#E3B577] text-black  ;"
        >
          Add Coffee <FaCoffee></FaCoffee>
        </Link>
      </div>
      <div className="grid my-12 px-5 gap-10 md:px-12 grid-cols-1 md:grid-cols-2">
        {coffees &&
          coffees.map(coffee => (
            <Coffee
              key={coffee._id}
              handlerDelete={handlerDelete}
              coffee={coffee}
            ></Coffee>
          ))}
      </div>
    </div>
  );
};

export default Coffees;
