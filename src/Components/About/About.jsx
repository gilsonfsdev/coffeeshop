import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section id='about' className='max-w-100max w-full my-0 mx-auto py-0 px-8 mb-64 flex items-center gap-24 scroll-mt-2.5 lg:flex-col lg:gap-12 lg:max-w-60rem'>
      <Image src='/about.png' alt="Sobre nós" width={500} height={400} className='max-w-full h-auto' />
      <div className='flex flex-col gap-8'>
        <h2 className='font-Inter text-6xl font-medium text-darkSecondary lg:text-center mm:text-5xl'>Conheça mais sobre o Bubble Coffe</h2>
        <p>
          Tudo começou quando um grupo de amigos percebeu que faltava um lugar
          em sua cidade para desfrutar de um café de qualidade, em um ambiente
          aconchegante e inspirador. Assim, surgiu a ideia de criar um espaço
          onde as pessoas pudessem se conectar com a natureza e com elas mesmas,
          enquanto saboreavam um café especial.
        </p>
        <p>
          Nosso espaço foi projetado para proporcionar uma experiência única, em
          sintonia com a natureza. Com tons verdes, plantas e uma decoração
          acolhedora, você pode desfrutar de um ambiente relaxante e calmo, que
          convida a uma pausa no ritmo acelerado do dia a dia.
        </p>
      </div>
    </section>
  )
}

export default About