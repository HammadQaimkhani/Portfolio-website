import React from "react";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import FindReplaceIcon from "@material-ui/icons/FindReplace";
import DevicesIcon from "@material-ui/icons/Devices";
import ServiceBlock from "./ServiceBlock";

function Services() {
  return (
    <>
      <section
        className='service bg-[#222121] text-white pb-24 flex items-center w-[32rem] font-[Poppins] '
        id='services'>
        <div className='w-full'>
          <div className='headings flex flex-col p-8'>
            <h1 className='tracking-wide text-2xl lg:text-3xl text-center pt-12 font-smeibold '>
              My Services
            </h1>
            <h2 className='text-center pt-2 text-base lg:text-lg text-[gray] relative'>
              What I Provide
              <span className='border-[1px] lg:block border-[#59b256] absolute lg:left-[45.8%] left-[38%] top-8 w-28 items-center my-2'></span>
            </h2>
          </div>
          <div
            className='service-blocks grid lg:grid-cols-3 gap-8 m-12 place-content-center'
            data-aos='zoom-out'
            data-aos-easing='linear'
            data-aos-duration='1000'>
            <ServiceBlock
              icons={
                <DeveloperModeIcon
                  style={{
                    fontSize: "3rem",
                  }}
                />
              }
              tagLine='Web design'
              para='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor natus delectus rem veniam quas aliquid assumenda non consequatur necessitatibus itaque ad culpa laudantium repellendus et voluptas perferendis, vero, alias consequuntur?'
            />

            <ServiceBlock
              icons={
                <FindReplaceIcon
                  style={{
                    fontSize: "3rem",
                  }}
                />
              }
              tagLine='SEO Engineer'
              para='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor natus delectus rem veniam quas aliquid assumenda non consequatur necessitatibus itaque ad culpa laudantium repellendus et voluptas perferendis, vero, alias consequuntur?'
            />

            <ServiceBlock
              icons={
                <DevicesIcon
                  style={{
                    fontSize: "3rem",
                  }}
                />
              }
              tagLine='Code Enthusiastic'
              para='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor natus delectus rem veniam quas aliquid assumenda non consequatur necessitatibus itaque ad culpa laudantium repellendus et voluptas perferendis, vero, alias consequuntur?'
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
