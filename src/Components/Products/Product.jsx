import Stars from '@/UI/Stars';
import Image from 'next/image';
import React from 'react';

const Product = ({product, title, roast, stars, reviews, price}) => {  
  return (
    <div className='text-2xl w-96 flex flex-col items-center my-0 mx-auto'>
      <Image 
        src={`/product${product}.png`} 
        alt={`produto ${product}`} 
        width={200} height={300}
      />
      <h2 className='uppercase text-2xl mb-4'>{title}</h2>
      <h3 className='text-darkSecondary'>{roast}</h3>
      <Stars stars={stars} reviews={reviews}/>
      <h4 className='text-3xl'>{price}</h4>
    </div>
  )
}

export default Product