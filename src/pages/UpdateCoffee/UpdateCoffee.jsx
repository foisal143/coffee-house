import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, image } = coffee;
  const handlerAddCoffee = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const image = form.image.value;
    const coffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      image,
    };
    fetch(`http://localhost:5000/coffees/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(coffee),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'success?',
            text: 'coffee Update success?',
            icon: 'success',
          });
        }
      });
  };
  return (
    <div className="py-5">
      <div className="mt-12 md:ms-24">
        <Link to="/">
          <button className="flex gap-2 hover:bg-[#D2B48C] duration-200 p-1 rounded-md items-center">
            <FaArrowLeft></FaArrowLeft> Back To Home
          </button>
        </Link>
      </div>
      <div className="w-10/12 px-5 py-16 mt-12 bg-slate-100 mx-auto">
        <div>
          <h3 className="text-4xl text-center font-semibold mb-5">
            Update Coffee
          </h3>
          <p className="text-center mb-5 mx-auto w-10/12">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handlerAddCoffee} action="">
          <div className="md:flex gap-5 mb-5">
            <div className="md:w-1/2">
              <label htmlFor="name">Name</label>
              <input
                className="input w-full input-bordered"
                type="text"
                name="name"
                placeholder="name"
                defaultValue={name}
              />
            </div>
            <div className="md:w-1/2">
              <label htmlFor="name">Chef</label>
              <input
                className="input w-full input-bordered"
                type="text"
                name="chef"
                placeholder="chef"
                defaultValue={chef}
              />
            </div>
          </div>
          <div className="md:flex gap-5 mb-5">
            <div className="md:w-1/2">
              <label htmlFor="name">Supplier</label>
              <input
                className="input w-full input-bordered"
                type="text"
                name="supplier"
                placeholder="supplier"
                defaultValue={supplier}
              />
            </div>
            <div className="md:w-1/2">
              <label htmlFor="name">Taste</label>
              <input
                className="input w-full input-bordered"
                type="text"
                name="taste"
                placeholder="teste"
                defaultValue={taste}
              />
            </div>
          </div>
          <div className="md:flex gap-5 mb-5">
            <div className="md:w-1/2">
              <label htmlFor="name">Category</label>
              <input
                className="input w-full input-bordered"
                type="text"
                name="category"
                placeholder="category"
                defaultValue={category}
              />
            </div>
            <div className="md:w-1/2">
              <label htmlFor="name">Details</label>
              <input
                className="input w-full input-bordered"
                type="text"
                name="details"
                placeholder="details"
                defaultValue={details}
              />
            </div>
          </div>
          <div className="">
            <label htmlFor="name">Photo URL</label>
            <input
              className="input w-full input-bordered"
              type="text"
              name="image"
              placeholder="url"
              defaultValue={image}
            />
          </div>
          <input
            className="w-full mt-5 h-10 rounded-md cursor-pointer bg-[#D2B48C]"
            type="submit"
            value="Update Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
