import Link from 'next/link';
import React from 'react';
import { RiFacebookFill, RiTwitterFill, RiInstagramLine } from 'react-icons/ri';

const socialLinks = [
  {url: "#", component: <RiFacebookFill /> },
  {url: "#", component: <RiTwitterFill /> },
  {url: "#", component: <RiInstagramLine /> },
];

const Social = () => {
  const renderLinks = socialLinks.map((link,i) => (
    <li key={i}>
      <Link href={link.url}>{link.component}</Link>
    </li>
  ));
  
  console.log(renderLinks)

  return (
    <section className=''>
      <div className=''>
        <h2 className='font-Inter capitalize text-6xl font-medium text-secondary'>Descubra seu café favorito</h2>
        <p className=''> 
          Cada xícara é preparada com ingredientes selecionados e muito carinho, para que você possa saborear cada momento. Venha nos visitar e desfrute de um café de qualidade enquanto se reconeta com o que é essencial.
        </p>
        <ul className=''>
          <renderLinks />
        </ul>
      </div>
    </section>
  )
}

export default Social