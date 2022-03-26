import React from "react";
import "../App.css";

function ServiceBlock({ icons, tagLine, para }) {
  return (
    <>
      <div className='w-[20rem] h-[24rem] lg:h-full lg:w-full rounded-md border-[1px] border-[#2c2b2b] shadow-lg shadow-[#000] p-8 transition-all duration-500 ease-in-out hover:scale-110'>
        {/* icons */}
        <div className='icons pb-4 '>{icons}</div>

        {/* tag line */}
        <h1 className='text-2xl font-bold pb-4'>{tagLine}</h1>
        {/* para */}
        <p className='text-[gray] '>{para}</p>
      </div>
    </>
  );
}

export default ServiceBlock;
