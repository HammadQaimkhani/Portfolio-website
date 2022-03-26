import React from "react";
import "../App.css";
import MenuIcon from "@material-ui/icons/Menu";
import Home from "./Home";
import { a } from "react-router-dom";

function Header() {
  const onChangeHandle = e => {
    e.preventDefault();
  };

  return (
    <>
      <header className='font-[Poppins] '>
        {/* Navigation  */}
        <nav className='bg-[#59b256] text-white  fixed w-full h-auto z-10 '>
          <div className='flex justify-between'>
            <span
              className='mx-4 my-3 font-normal tracking-widest text-sm text-center border-white border-2 px-2 rounded'
              data-aos='zoom-in-up'
              data-aos-duration='900'
              data-aos-easing='ease-in-sine'>
              <a href='#' className='sm:text-lg sm:my-2 lg:text-xl lg:mx-10 '>
                H A M M A D
              </a>
            </span>
            <div className='p-3 inline-flex ml-auto md:text-3xl lg:hidden'>
              <MenuIcon />
            </div>
            <div
              className='lg:inline-flex flex'
              data-aos='zoom-in-up'
              data-aos-dely='950'>
              <ul className=' font-normal hidden lg:my-3.5 lg:mx-4 lg:space-x-9 lg:flex  '>
                <li className='hover:border-b-2'>
                  <a href='#home'>Home</a>
                </li>
                <li className='hover:border-b-2'>
                  <a href='#about'>About Me</a>
                </li>

                <li className='hover:border-b-2'>
                  <a href='#services'>Services</a>
                </li>
                <li className='hover:border-b-2'>
                  <a href='#skills'>Skills</a>
                </li>

                <li className='hover:border-b-2'>
                  <a href='#contact'>Contact Me</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Home />
      </header>
    </>
  );
}

export default Header;
