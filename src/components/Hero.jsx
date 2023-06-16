import React from "react";
import image from "../assets/image6.jpg";
import sbr from "../assets/sbr.png"
const Hero = () => {
  return (
    <div className="">
      <nav className="flex justify-between items-center py-5">
        <div className="h-[75px] relative">
          <img
            src={sbr}
            alt=""
            className="w-full h-full object-cover rounded-md relative"
          />
          <h1 className="text-xl md:text-2xl font-bold">SBR MINARA</h1>
        </div>
        {/* <ul className="flex items-center space-x-5 text-xs md:text-base">
          <li>About</li>
          <li>Features</li>
          <li>Trending</li>

        </ul> */}
        <button className="bg-yellow-400 px-5 py-2 rounded-xl text-xs md:text-base">Contact</button>
      </nav>
      <div className="h-[300px] py-5 relative">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover rounded-md relative"
        />

        {/* {/* <div className="absolute bottom-5 w-full"> */}
           {/* <div className=" bg-slate-500 w-11/12 xl:w-4/5 m-auto grid lg:flex  items-center p-5 drop-shadow-2xl md:space-x-5 md:rounded-md">
            {/* <h1 className="text-white items-center">SBR MINARA</h1> */}
            {/* <div className=" flex flex-col space-y-2 ">
              <label htmlFor="location">Location</label>
              <input type="text" placeholder="USA" className="outline-0 text-xs" />
            </div> */}
            {/* <div className="flex flex-col space-y-2">
              <label htmlFor="property">property type</label>
              <input type="text" placeholder="property" className="outline-0 text-xs" />
            </div> */}
            {/* <div className="flex flex-col space-y-2">
              <label htmlFor="price">Max Price</label>
              <input type="text" placeholder="$8,544" className="outline-0 text-xs" />
            </div> */}
            {/* <div>
              <button className="bg-yellow-400 px-5 py-2 mt-5 md:mt-0 md:rounded-full">Search</button>
            </div> */}
          {/* </div> */} 

        {/* </div> */} 
      </div>

    </div>
  );
};

export default Hero;
