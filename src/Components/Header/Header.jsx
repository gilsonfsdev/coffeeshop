import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className='bg-gradient-to-r from-lightPrimary to-primary flex justify-center items-center relative mb-20 overflow-x-clip min-h-60'>
      <div className='text-center max-w-3xl py-0 px-4'>
        <h1>Bubble Coffee</h1>
        <div className='border-t border-solid border-secondary mt-2 mr-auto mb-6 ml-auto w-1/2'/>
        <p className='text-secondary mb-8'>
          Se você busca um momento de tranquilidade em meio à agitação do dia a dia, venha conhecer a Bubble Coffe. Nosso espaço foi cuidadosamente projetado para proporcionar uma experiência única, em sintonia com a natureza.
        </p>
        <a href="#about" className='bg-secondary text-primary uppercase font-bold  outline-none border-none py-4 px-24 rounded-xl transition-all duration-500 hover:px-32'>Conheça</a>
      </div>
    <Image src="/leaf1.png" alt="Folha" width={320} height={460}
    className='absolute bottom-32 right-0 lg:-right-40 lg:bottom-24 md:hidden'/>
    <Image src="/coffee.png" alt="Sementes de café" width={260} height={260}
    className='absolute -bottom-40 right-0 md:hidden'/>
    <Image src="/leaf2.png" alt="Folha" width={400} height={520} priority
    className='absolute bottom-0 left-0 lg:-left-40 md:hidden'/>
    <Image src="/flower.png" alt="flo" width={260} height={260}
    className='absolute -bottom-40 left-40 lg:left-16 md:hidden'/>

    </header>
  )
}

export default Header