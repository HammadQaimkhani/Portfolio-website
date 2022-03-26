import React from "react";

const Contactdemo = ({ icon, name, ex }) => {
  return (
    <>
      <div className='demo  flex gap-4'>
        {/* icons */}
        <div className='icon text-[#59b256] '>{icon}</div>
        <div className='heading mb-4'>
          <h1 className='tracking-wide font-semibold '>{name}</h1>
          <h1 className='text-[gray] '>{ex}</h1>
        </div>
      </div>
    </>
  );
};

export default Contactdemo;
