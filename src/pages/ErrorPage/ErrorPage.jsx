import React from 'react';
import errorImg from '../../assets/404/404.gif';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
const ErrorPage = () => {
  return (
    <div className="my-12 px-5 md:px-12">
      <img className="w-fit mx-auto" src={errorImg} alt="" />
      <Link className="mt-5 " to="/">
        {' '}
        <button className="flex w-[150px] h-[40px] rounded-md mx-auto bg-amber-950 text-white justify-center items-center gap-2">
          {' '}
          <FaArrowLeft></FaArrowLeft> Go To Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
