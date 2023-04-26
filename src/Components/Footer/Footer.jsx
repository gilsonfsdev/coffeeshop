import Logo from '@/UI/Logo'
import SocialLinks from '@/UI/SocialLinks'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-primary p-24 pb-8 lg:py-24 lg:px-8 lg:pb-4'>
      <div className='max-w-100max w-full my-0 mx-auto py-0 px-8 flex justify-between gap-24 mb-8 lg:flex-col lg:gap-24 lg:items-center lg:max-w-60rem lg:mb-16'>
        <div className='max-w-25rem grow lg:max-w-none'> 
          <h2>
            <Logo />
          </h2>
          <h3 className='mb-8 mt-2 text-mediumSecondary opacity-80'>
            Desfrute de um café de qualidade enquanto se reconecta com o que é essencial
          </h3>
          <SocialLinks />
        </div>

        <div className='grow-2 w-full'>
          <h2 className='font-semibold uppercase text-mediumSecondary mb-8 font-Inter text-center'>Faça-nos uma visita</h2>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8058.910289930575!2d2.9406611710844976!3d11.13240978938546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11cd10083c934e37%3A0x41c6621a2923fb6e!2sLAS%20VEGAS%20ALIMENTATION!5e0!3m2!1spt-BR!2sbr!4v1678902761040!5m2!1spt-BR!2sbr'
            allowFullScreen={true}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            className='w-full h-72 rounded-lg'
          />
        </div>
        <div className='grow lg:w-full'>
          <h2 className='text-3xl mb-8 font-normal uppercase text-mediumSecondary font-Inter'>Funcionamento</h2>
          <ul>
            <li className='text-mediumSecondary opacity-80 mb-8'>Segunda - Sexta: 09:00 às 18:00</li>
            <li className='text-mediumSecondary opacity-80 mb-8'>Sábados: 09:00 às 14:00</li>
            <li className='text-mediumSecondary opacity-80 mb-8'>(00) 000000-0000</li>
            <li className='text-mediumSecondary opacity-80 '>contato@bubblecoffee.com.br</li>
          </ul>
        </div>
      </div>
      <span className='block text-center text-mediumSecondary opacity-80'>Bubble Coffee - Todos os direitos reservados</span>
    </footer>
  )
}

export default Footer