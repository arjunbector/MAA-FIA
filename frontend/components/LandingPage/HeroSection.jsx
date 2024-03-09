import Image from "next/image";
import React from "react";
import img1 from "../../public/landingPage/home/img1.svg";
import img2 from "../../public/landingPage/home/img2.svg";
import img3 from "../../public/landingPage/home/img3.svg";
import img4 from "../../public/landingPage/home/img4.svg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-[#F5EEE6]">
      <div className="h-52 w-full flex flex-col-reverse  md:flex-row justify-center items-center mx-10 gap-10">
        <div className="w-full sm:w-1/2 h-full bg-red-500">LEFT</div>
        <div className="w-fit grid grid-cols-2 justify-items-center gap-2 md:gap-5">
         <div className="rounded-tl-[50%] overflow-hidden w-24 h-24 md:h-40 md:w-40">
          <Image className="object-cover h-full" src={img1} />
         </div>
         <div className="rounded-br-[50%] overflow-hidden  w-24 h-24 md:h-40 md:w-40">
          <Image className="object-cover h-full" src={img2} />
         </div>
         <div className="rounded-tr -[50%] overflow-hidden w-24 h-24 md:h-40 md:w-40">
          <Image className="object-cover h-full" src={img3} />
         </div>
         <div className="rounded-bl-[50%] overflow-hidden  w-24 h-24 md:h-40 md:w-40">
          <Image className="object-cover h-full" src={img4} />
         </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
