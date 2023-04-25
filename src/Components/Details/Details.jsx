import Image from 'next/image'
import React from 'react'

const Details = () => {
  return (
    <section className='max-w-100max w-full my-0 mx-auto py-0 px-8 mb-64 flex justify-between items-center relative '>
      <div className='max-w-15rem'>
        <h2 className='text-xl mb-6'>Experimente os difentes tipos de torra</h2>
        <div className='flex gap-4'>
          <span className='w-12 h-12 rounded-full bg-secondary'/>
          <span className='w-12 h-12 rounded-full bg-mediumSecondary' />
          <span className='w-12 h-12 rounded-full bg-lightDarkSecondary'/>
        </div>
      </div>
      <Image src="/coffee2.png" alt="café" width={340} height={225} className='absolute top-8 left-1/2 -translate-x-1/2'/>
      <div className='bg-lightSecondary p-8 z-10 -mt-48 shadow-shadowBlack'>
        <div className='border border-solid border-darkSecondary p-8 text-darkSecondary max-w-lg'>
          <h2 className='text-3xl text-center mb-8 uppercase'>Bubble Coffee</h2>
          <div className='mb-8'>
            <h3 className='uppercase text-2xl mb-4'>Endereço:</h3>
            <h4 className='text-2xl'>Rua fantasia ,nº 90 / Maringá - PR</h4>
          </div>
          <div>
            <h3 className='uppercase text-2xl mb-4'>Funcionamento:</h3>
            <h4 className='text-2xl'>
              <span className='block mb-2'>Segunda a sexta: 09:00 às 18:00</span>
              <span>Sábados: 09:00 às 14:00</span>
            </h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Details