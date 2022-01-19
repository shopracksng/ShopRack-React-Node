import React from 'react';
import FadeInUp from '../animations/FadeInUp';

const ServiceItem = ({ data: { image, name, text } }) => {
  return (
    <FadeInUp className='w-full md:w-2/5 xl:w-1/4 p-6 md:p-12 shadow-xl rounded-xl m-5 space-y-3'>
      <img src={image} alt='' className='w-28' />
      <h3 className='font-bold text-xl'>{name}</h3>
      <p>{text}</p>
    </FadeInUp>
  );
};

export default ServiceItem;
