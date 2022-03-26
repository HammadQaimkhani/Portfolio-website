import React from "react";

function SkillsSet({ skillName, percent }) {
  return (
    <div className='my-4'>
      <div className='flex justify-between'>
        <h1 className='lg:text-lg tracking-wider'>{skillName}</h1>
        <h1 className='lg:text-lg tracking-wider'>{percent}</h1>
      </div>
    </div>
  );
}

export default SkillsSet;
