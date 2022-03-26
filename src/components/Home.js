import React from "react";
import { Button } from "@material-ui/core";

function Home() {
  return (
    <>
      <main className='lg:flex w-full' id='home'>
        <div className='flex justify-between'>
          <div
            className='lg:mt-24 ml-7'
            data-aos='fade-left'
            data-aos-delay='700'
            data-aos-easing='ease-in-sine'>
            <h2 className='text-xl mt-16 sm:mt-[4.5rem] md:text-xl md:mt-20 lg:text-2xl lg:mx-32  my-6'>
              Hello, My Name is
            </h2>
            <h1 className='text-2xl font-black md:text-3xl lg:text-4xl lg:mx-32'>
              Hammad Khalid
            </h1>
            <div className='h-8 overflow-hidden text-[#59b256] text-2xl my-10 md:text-3xl'>
              <div className='animationSkill lg:text-2xl lg:mx-32'>
                <div>Web Developer</div>
                <div>React Developer</div>
                <div>Enthusiastic Coder</div>
                <div>Contact Creater</div>
              </div>
            </div>
            <p className='text-[gray] font-normal py-2 mx-2 md:text-lg lg:mx-24  lg:px-6 leading-6'>
              I design and develop a service for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores.
            </p>
            <div className='mx-[7.5rem] my-5 rounded-sm'>
              <a href='./CV/Hammad khalid cv.docx' download='CV'>
                <Button
                  style={{
                    backgroundColor: "#59b256",
                    textTransform: "capitalize",
                    width: "9rem",
                    fontSize: "16px",
                  }}
                  variant='contained'
                  color='primary'>
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div
          className='hero pt-12 w-[32rem] md:w-full lg:h-[600.5px] lg:w-full flex justify-center bg-[#59b256]'
          data-aos='fade-right'
          data-aos-delay='500'>
          <div className='lg:bg-style'></div>
          <img src='./img/hammad2.png' alt='pic' className='' />
        </div>
      </main>
    </>
  );
}

export default Home;
