import React from 'react';
import bg from '../../../assets/more/24.jpg';
import logo from '../../../assets/more/logo1.png';
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaMailBulk,
} from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';
const Footer = () => {
  return (
    <footer className="bg-slate-100">
      <div className="md:flex px-5 pt-20 lg:px-12 justify-between gap-5">
        <div className="py-2 md:w-1/2">
          <div>
            <img className="w-20 h-20" src={logo} alt="" />
            <h3 className="text-amber-950  my-5 text-xl font-semibold">
              Espresso Emporium
            </h3>
            <p className="text-[#1B1A1A]">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            <div className="text-amber-950 text-3xl my-5 flex gap-2 ">
              <FaFacebook></FaFacebook>
              <FaTwitter></FaTwitter>
              <FaInstagram></FaInstagram>
              <FaLinkedin></FaLinkedin>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-amber-950  my-5 text-xl font-semibold">
              Get in Touch
            </h3>
            <div>
              <p className="flex items-center gap-2">
                <span className="text-amber-950">
                  {' '}
                  <FaPhone></FaPhone>{' '}
                </span>
                <span>+88 01533 333 333</span>
              </p>
              <p className="flex items-center my-3 gap-2">
                <span className="text-amber-950">
                  {' '}
                  <FaMailBulk></FaMailBulk>
                </span>{' '}
                <span>islammdfoisal54@gmail.com</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-amber-950">
                  {' '}
                  <CiLocationOn></CiLocationOn>
                </span>{' '}
                <span>72, Wall street, King Road, Dhaka</span>
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 pb-5 mt-12">
          <h3 className="text-amber-950  my-5 text-xl font-semibold">
            Connect with Us
          </h3>
          <form action="">
            <input
              className="input input-bordered w-full"
              type="text"
              placeholder="name"
            />
            <input
              className="input my-5 input-bordered w-full"
              type="text"
              placeholder="email"
            />
            <textarea
              className="input w-full h-32 input-bordered"
              name=""
              id=""
              placeholder="about"
            ></textarea>
            <input
              type="submit"
              className="text-amber-950 border hover:bg-amber-950 hover:text-white transition-all border-amber-950 w-32 h-10 rounded-full cursor-pointer mt-5"
              value="Send Message"
            />
          </form>
        </div>
      </div>
      <div className="h-16  flex relative justify-center items-center">
        <img className="w-full h-full" src={bg} alt="" />
        <small className="absolute text-white ">
          Copyright Espresso Emporium ! All Rights Reserved
        </small>
      </div>
    </footer>
  );
};

export default Footer;
