import Image from "next/image";
import React from "react";
import img1 from "../../public/landingPage/home/img1.svg";
import img2 from "../../public/landingPage/home/img2.svg";
import img3 from "../../public/landingPage/home/img3.svg";
import img4 from "../../public/landingPage/home/img4.svg";
import mumma from "../../public/landingPage/home/mumma.svg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-start pt-20 bg-[#F5EEE6]">
      <div className="h-52 w-full flex flex-col-reverse  md:flex-row justify-center items-start mx-32 gap-10">
        <div className="w-full sm:w-1/2 h-full">
          <div className="relative">
            <motion.div className="absolute top-[-50px] left-[-50px] z-[1]">
              <Image src={mumma} />
            </motion.div>
            <div className="z-[10]">
              <h1 className="text-7xl font-[Grespoika]">MAA-FIA</h1>
            </div>
          </div>
          <div className="flex flex-col gap-10 mt-5 text-lg">
            <p className="font-semibold">
              <span className="text-[#E6A4B4]">
                Mother's After-Assistance – Facilitating Integration &
                Advancement
              </span>{" "}
              is a cutting-edge web app designed to support women returning to
              work after childbirth
            </p>
            <p className="">
              73% of women leave their job after becoming Mother. We are here to
              help and promote our working MUMMAs to be independent and balance
              their loving motherhood and corporate life
            </p>
          </div>
        </div>
        <div className="w-fit grid grid-cols-2 justify-items-center gap-2 md:gap-5">
          <motion.div
            style={{ originX: 1, originY: 1 }}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.5 }}
            className="z-[3] rounded-tl-[50%] overflow-hidden w-24 h-24 md:h-40 md:w-40"
          >
            <Image className="object-cover h-full" src={img1} />
          </motion.div>
          <motion.div
            style={{ originX: 0, originY: 1 }}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="z-[2] rounded-br-[50%] overflow-hidden  w-24 h-24 md:h-40 md:w-40"
          >
            <Image className="object-cover h-full" src={img2} />
          </motion.div>
          <motion.div
            style={{ originX: 1, originY: 0 }}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="z-[1] rounded-tr-[50%] overflow-hidden w-24 h-24 md:h-40 md:w-40"
          >
            <Image className="object-cover h-full" src={img3} />
          </motion.div>
          <motion.div
            style={{ originX: 0, originY: 0 }}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="z-[0] rounded-bl-[50%] overflow-hidden  w-24 h-24 md:h-40 md:w-40"
          >
            <Image className="object-cover h-full" src={img4} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
