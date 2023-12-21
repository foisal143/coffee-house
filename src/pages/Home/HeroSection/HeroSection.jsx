import React from 'react';
import bg from '../../../assets/more/3.png';
import { Link } from 'react-router-dom';
const HeroSection = () => {
  return (
    <div className=" h-[calc(100vh-80px)] relative">
      <img className="w-full h-full" src={bg} alt="" />
      <div className="absolute px-5 md:w-1/2 right-12 top-[288px] text-white">
        <h3 className="text-3xl font-semibold">
          Would you like a Cup of Delicious Coffee?
        </h3>
        <p className="my-5">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <button className="btn bg-[#E3B577] text-black hover:bg-transparent me-5 hover:text-white">
          Learn More
        </button>{' '}
      </div>
    </div>
  );
};

export default HeroSection;
