import React from 'react';
import icon1 from '../../../assets/icons/1.png';
import icon2 from '../../../assets/icons/2.png';
import icon3 from '../../../assets/icons/3.png';
import icon4 from '../../../assets/icons/4.png';
const IconsSection = () => {
  return (
    <div className="bg-slate-100 py-12 px-5 md:px-12  md:flex justify-between items-center gap-5">
      <div>
        <img className="size-20" src={icon1} alt="" />
        <h3 className="text-xl my-5 font-bold text-amber-950">Awesome Aroma</h3>
        <p>You will definitely be a fan of the design & aroma of your coffee</p>
      </div>
      <div>
        <img className="size-20" src={icon2} alt="" />
        <h3 className="text-xl my-5 font-bold text-amber-950">High Quality</h3>
        <p>We served the coffee to you maintaining the best quality</p>
      </div>
      <div>
        <img className="size-20" src={icon3} alt="" />
        <h3 className="text-xl my-5 font-bold text-amber-950">Pure Grades</h3>
        <p>The coffee is made of the green coffee beans which you will love</p>
      </div>
      <div>
        <img className="size-20" src={icon4} alt="" />
        <h3 className="text-xl my-5 font-bold text-amber-950">
          Proper Roasting
        </h3>
        <p>Your coffee is brewed by first roasting the green coffee beans</p>
      </div>
    </div>
  );
};

export default IconsSection;
