// import React from 'react';
import insta1 from '../../assets/cups/Rectangle 9.png'
import insta2 from '../../assets/cups/Rectangle 10.png'
import insta3 from '../../assets/cups/Rectangle 11.png'
import insta4 from '../../assets/cups/Rectangle 12.png'
import insta5 from '../../assets/cups/Rectangle 13.png'
import insta6 from '../../assets/cups/Rectangle 14.png'
import insta7 from '../../assets/cups/Rectangle 15.png'
import insta8 from '../../assets/cups/Rectangle 16.png'
const Instagram = () => {
  return (
    <div className="mt-28 md:max-w-6xl mx-auto">
      <div className="text-center space-y-3">
        <h5 className="text-lg font-raleway">Follow Us Now</h5>
        <h2 className="text-[#331A15] font-rancho text-5xl font-semibold pb-4">
          Follow on Instagram
        </h2>
      </div>

      <div className="mt-12 grid md:grid-cols-4 gap-5">
         <img src={insta1} alt="" />
         <img src={insta2} alt="" />
         <img src={insta3} alt="" />
         <img src={insta4} alt="" />
         <img src={insta5} alt="" />
         <img src={insta6} alt="" />
         <img src={insta7} alt="" />
         <img src={insta8} alt="" />
      </div>
    </div>
  );
};

export default Instagram;
