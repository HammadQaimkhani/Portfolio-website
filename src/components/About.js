import React from "react";

function About() {
  return (
    <>
      <section
        className='about bg-[#f6f6f6] lg:px-24 lg:py-40 w-[32rem] font-[Poppins] '
        id='about'
        data-aos='fade-right'
        data-aos-duration='1000'
        data-aos-easing='linear'>
        <div className='container lg:flex lg:items-center lg:justify-between'>
          <div className='left flex justify-center py-8 ml-2'>
            <img
              src='./img/pic2.jpg'
              className='w-[200px] lg:w-[800px] rounded-full '
              alt='PROFILE PICTURE'
            />
          </div>
          <div className='right text-center mx-4 lg:mx-32'>
            <h2 className='text-2xl lg:text-3xl mb-2'>
              About <span className='text-[#59b256]'>Me</span>
            </h2>
            <p className='mb-2 text-lg lg:text-xl'>Hello I'm Hammad Khalid. </p>
            <p className='text-[gray] leading-6 text-xs md:text-base md:mb-3 md:mx-8 lg:text-lg'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda magnam officia, eius perferendis laborum quidem
              consequuntur blanditiis nam, omnis eligendi fugit consectetur nisi
              mollitia vero exercitationem repellendus maiores aperiam
              consequatur.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
