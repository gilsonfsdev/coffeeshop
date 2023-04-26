import SocialLinks from '@/UI/SocialLinks';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Social = () => {

  return (
    <section id='social' className='max-w-100max w-full my-0 mx-auto mb-48 bg-primary p-24 flex justify-between gap-8 max-h-48 scroll-mt-40 lg:py-24 lg:px-12 md:justify-center'>
      <div className='max-w-50rem flex flex-col md:items-center md:text-center'>
        <h2 className='font-Inter text-6xl font-medium text-secondary uppercase'>Descubra seu café favorito</h2>
        <p className='mt-8 mb-32 text-secondary mm:mb-16'> 
          Cada xícara é preparada com ingredientes selecionados e muito carinho, para que você possa saborear cada momento. Venha nos visitar e desfrute de um café de qualidade enquanto se reconeta com o que é essencial.
        </p>
        <SocialLinks />
      </div>
      <Image className='-mt-40 drop-shadow-md h-full md:hidden' 
      src='/social.png' alt='Cafés e Plantas' 
      width={380} 
      height={540} 
      />
    </section>
  )
}

export default Social