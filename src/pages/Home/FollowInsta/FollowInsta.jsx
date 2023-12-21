import React from 'react';
import cup1 from '../../../assets/cups/Rectangle 9.png';
import cup2 from '../../../assets/cups/Rectangle 10.png';
import cup3 from '../../../assets/cups/Rectangle 11.png';
import cup4 from '../../../assets/cups/Rectangle 12.png';
import cup5 from '../../../assets/cups/Rectangle 13.png';
import cup6 from '../../../assets/cups/Rectangle 14.png';
import cup7 from '../../../assets/cups/Rectangle 15.png';
import cup8 from '../../../assets/cups/Rectangle 16.png';
const FollowInsta = () => {
  return (
    <div className="my-12">
      <h3 className="text-3xl text-center font-bold text-amber-950">
        Follow on Instagram
      </h3>
      <div className="grid my-12 px-5 md:px-12 grid-cols-1 md:grid-cols-4 gap-5">
        <img src={cup1} alt="" />
        <img src={cup2} alt="" />
        <img src={cup3} alt="" />
        <img src={cup4} alt="" />
        <img src={cup5} alt="" />
        <img src={cup6} alt="" />
        <img src={cup7} alt="" />
        <img src={cup8} alt="" />
      </div>
    </div>
  );
};

export default FollowInsta;
