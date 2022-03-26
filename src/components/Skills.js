import React from "react";
import SkillsSet from "./SkillsSet";

function Skills() {
  return (
    <>
      <section
        className='skills bg-[#f6f6f6] font-[Poppins] pb-16 w-[32rem] sm:w-[40rem] md:w-[48rem] lg:w-full'
        id='skills'>
        <div className='top flex justify-center  lg:text-3xl font-semibold tracking-wide pt-16 text-2xl '>
          <h1 className='border-b-2 border-[#59b256] pb-2'>
            My <span className='text-[#59b256] '>Skills</span>
          </h1>
        </div>
        <div className='container lg:flex justify-between w-full my-12 '>
          <div
            className='left lg:w-1/2 ml-8 mb-8'
            data-aos='fade-left'
            data-aos-easing='linear'
            data-aos-duration='1000'>
            <h1 className='lg:text-2xl font-bold text-xl '>
              My creative skills & experiences.
            </h1>
            <p className='text-[gray] mt-6  '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              deleniti ratione nesciunt at dicta consectetur doloribus quo
              facere quaerat sequi assumenda asperiores nam perspiciatis, nihil,
              libero distinctio dolor. Quis, eveniet! Laborum perspiciatis
              cumque rerum doloremque, quas expedita et doloribus minus magni,
              ut animi eos aut maxime dolorum autem corrupti! Voluptate
              explicabo maxime corporis ullam voluptatum sequi incidunt, tempora
              dolorum neque. Placeat obcaecati neque quis beatae laboriosam
              cumque ab ipsa, unde, eligendi, aliquid perspiciatis inventore
              nemo sunt quos iusto! Dolorem mollitia necessitatibus, accusantium
              repudiandae non soluta pariatur ullam quam rerum vel.
            </p>
          </div>
          <div className='right lg:w-1/2 mx-16 relative'>
            <SkillsSet skillName={"HTMl"} percent={"90%"} />

            <div
              className='skillBar h-2 bg-[#c9c9c9] rounded-full before:h-2 before:rounded-full before:absolute before:bg-[#59b256] before:w-[90%]'
              data-aos='fade-right'
              data-aos-easing='linear'
              data-aos-duration='1000'></div>
            <SkillsSet skillName={"CSS"} percent={"60%"} />

            <div
              className='skillBar h-2 bg-[#c9c9c9] rounded-full  before:h-2 before:rounded-full before:absolute before:bg-[#59b256] before:w-[60%]'
              data-aos='fade-right'
              data-aos-easing='linear'
              data-aos-duration='1000'></div>
            <SkillsSet skillName={"JS"} percent={"80%"} />

            <div
              className='skillBar h-2 bg-[#c9c9c9] rounded-full  before:h-2 before:rounded-full before:absolute before:bg-[#59b256] before:w-[80%]'
              data-aos='fade-right'
              data-aos-easing='linear'
              data-aos-duration='1000'></div>
            <SkillsSet skillName={"REACT"} percent={"50%"} />

            <div
              className='skillBar h-2 bg-[#c9c9c9] rounded-full  before:h-2 before:rounded-full before:absolute before:bg-[#59b256] before:w-[50%]'
              data-aos='fade-right'
              data-aos-easing='linear'
              data-aos-duration='1000'></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
