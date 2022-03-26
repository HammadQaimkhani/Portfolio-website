import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MailIcon from "@material-ui/icons/Mail";
import Contactdemo from "./Contactdemo";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <>
      <section
        className='contact w-screen font-[Poppins] h-screen'
        id='contact'>
        <div className='top flex justify-center '>
          <h1 className='lg:text-3xl text-2xl tracking-wide py-16'>
            Contact <span className='text-[#59b256]'>me</span>
          </h1>
        </div>
        <div className='container lg:flex lg:w-full lg:relative '>
          <div className='left lg:w-1/2 ml-20 '>
            <h1 className='lg:text-xl font-semibold mb-2 '>Get in Touch</h1>
            <p className='text-[gray] my-4 '>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              consequuntur rem possimus ipsam quae consequatur quia sint veniam
              aliquid. Unde.
            </p>
            <div className='left-inner'>
              <Contactdemo
                icon={
                  <PersonIcon
                    style={{
                      fontSize: "1.8rem",
                    }}
                  />
                }
                name={"Name"}
                ex={"Hammad Khalid"}
              />
              <Contactdemo
                icon={
                  <LocationOnIcon
                    style={{
                      fontSize: "1.8rem",
                    }}
                  />
                }
                name={"Address"}
                ex={"TandoAllahyar, Pakistan "}
              />
              <Contactdemo
                icon={
                  <MailIcon
                    style={{
                      fontSize: "1.8rem",
                    }}
                  />
                }
                name={"E-Mail"}
                ex={"hammad@gmail.com"}
              />
            </div>
          </div>

          <div className='right lg:w-1/2 h-full pl-4  '>
            <h1 className='lg:text-xl tracking-wide font-semibold my-2'>
              Message me
            </h1>
            <div className='input flex gap-8 mb-8 mt-4'>
              <div className='field w-full h-11'>
                <input
                  type='text'
                  placeholder='Name'
                  className='border-[1px]  outline-none border-[lightgray] rounded-md px-4 w-full h-full'
                />
              </div>
              <div className='field  w-full h-11'>
                <input
                  type='text'
                  placeholder='Email'
                  className='border-[1px] outline-none border-[lightgray] rounded-md px-4 w-full h-full'
                />
              </div>
            </div>
            <div className='field  w-full h-11 mb-8'>
              <input
                type='text'
                placeholder='Subject'
                className='border-[1px]  outline-none border-[lightgray] rounded-md px-4 w-full h-full'
              />
            </div>
            <div className='field  w-full h-20 mb-8'>
              <input
                type='text'
                placeholder='Describe Project'
                className='border-[1px]  outline-none border-[lightgray] rounded-md px-4 w-full h-full '
              />
            </div>
          </div>
          <div className='btn relative '>
            <Button
              style={{
                backgroundColor: "#59b256",
                textTransform: "capitalize",
                marginBottom: "-3rem",
                width: "9rem",
                fontSize: "15px",
                position: "absolute",
                bottom: "10px",
                right: "27.5rem",
              }}
              variant='contained'
              color='primary'>
              send message
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
