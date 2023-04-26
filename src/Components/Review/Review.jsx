import Stars from '@/UI/Stars';
import Image from 'next/image';
import React from 'react';
import { useState, useEffect } from 'react';

const reviews = [
  {
    avatar:'/maria.jpg',
    name:'Maria Llop',
    role:'Designer',
    stars: 5,
    comment:'Eu simplesmente adorei o café daqui! O ambiente é acolhedor e os funcionários são super atenciosos.'
  },
  {
    avatar:'/avatar2.png',
    name:'João Goes',
    role:'Programador',
    stars: 5,
    comment:'Adorei o café! É sem dúvida o melhor da cidade. Recomendo a todos que queiram uma experiência única e inesquecível.'
  },
  {
    avatar:'/avatar3.png',
    name:'Clara Pereira',
    role:'Ceramista',
    stars: 5,
    comment:'O café é bom, mas acho que podera ter mais opções de acompanhemnto, como bolos e pães.'
  }
]

const Review = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () =>
    setCurrentReview(
      currentReview === reviews.length - 1 ? 0 : currentReview + 1
    );
  const previousReview = () =>
    setCurrentReview(
      currentReview === 0 ? reviews.length - 1 : currentReview - 1
    );

  useEffect(() => {
    const interval = setInterval(nextReview, 5000);
    return () => clearInterval(interval);
  }, [currentReview]);

  const { avatar, name, role, stars, comment } = reviews[currentReview];


  return (
    <section id="reviews"className='max-w-100max w-full my-0 mx-auto py-0 px-8 mb-64 flex flex-col items-center'>
      <Image
        src='/graos.png' 
        alt="graos de café"
        width={425}
        height={250}
        className='mb-24 max-w-full h-auto drop-shadow-xl'
      />
      <h2 className='font-Inter text-6xl font-medium text-darkSecondary capitalize mb-8'>O que falam da gente</h2>
      <div className='flex flex-col items-center max-w-60rem relative'>
        <button className='absolute bg-darkSecondary border-none outline-none p-4 rounded-md text-lightSecondary font-bold text-3xl left-0 top-20 hover:cursor-pointer' onClick={previousReview}>
          &larr;
        </button>
        <Image
          src={avatar}
          alt="avatar"
          width={120}
          height={120}
          className='rounded-full mb-4'
        />
        <h3 className='uppercase text-2xl mb-2'>{name}</h3>
        <h4 className='text-2xl mb-8'>{role}</h4>
        <Stars stars={stars} />
        <p className='text-center'>{comment}</p>
        <button className='absolute bg-darkSecondary border-none outline-none p-4 rounded-md text-lightSecondary font-bold text-3xl right-0  top-20 hover: cursor-pointer ' onClick={nextReview}>
          &rarr;
        </button>
      </div>
    </section>
  )
}

export default Review 