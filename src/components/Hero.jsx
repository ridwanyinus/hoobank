import React from "react";

import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
const Hero = () => {
   return (
      <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} `}>
         <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-10 w-full hero_section ss:px-5`}>
            <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-4 mt-4 hero_discount-container ">
               <img src={discount} alt="alt" className="w-[32px] h-[32px]" />

               <p className={`${styles.paragraph} ml-2 hero_discount` }>
                  <span className="text-white ">20$</span> DISCOUNT FOR {""}
                  <span className="text-white ">1 MONTH </span>ACCOUNT
               </p>
            </div>

            <div className="flex flex-row  items-center w-full mr-0 justify-between lg:w-[550px] ">
               <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white sm:leading-[100px] ss:leading-[78px] hero_next-gen">
                  The Next <br className="sm:block hidden" /> {""}
                  <span className="text-gradient">Generation</span>
               </h1>
               <div className="ss:flex hidden md:mr-4 mr-0 mb-0 lg:mb-14 items-start ">
                  <GetStarted />
               </div>
            </div>

            <h1 className=" font-poppins font-semibold ss:text-[68px] text-[52px] text-white sm:leading-[100px] ss:leading-[78px]  hero_payment">Payment Method. </h1>
            <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
               Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.We examine annual percentage rates, annual fees.{" "}
            </p>
         </div>

         <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative hero_img`}>
            <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
            <div className="absolute z-[1] w-[80%] h-[85%] bottom-40 white__gradient rounded-full"></div>
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient pink__gradient"></div>
         </div>
         <div className={`ss:hidden ${styles.flexCenter} `}>
            <GetStarted />
         </div>
      </section>
   );
};

export default Hero;
