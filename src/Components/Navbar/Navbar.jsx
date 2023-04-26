import Logo from '@/UI/Logo';
import Image from 'next/image';
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState} from 'react';

const links = [
  {id: 1, url:"#products", text:"Cafés"},
  {id: 2, url:"#about", text:"Sobre"},
  {id: 3, url:"#social", text:"Social"},
  {id: 4, url:"#reviews", text:"Depoimentos"},
];

const Navbar = () => {
  
  const AddClass = () => {
    const navMobile = document.getElementById("navMobile");
    navMobile.classList.remove("hidden");
  }

  const RemoveClass = () => {
    const navMobile = document.getElementById("navMobile");
    navMobile.classList.add("hidden");
  };

  return (
    <section >
      <div className='max-w-100max w-full my-0 mx-auto py-0 px-8 mb-48 flex justify-between items-center absolute top-8 left-1/2 -translate-x-1/2 z-10 p-8 md:hidden'>
        <nav >
          <ul className='flex flex-row gap-8'>
            <li key={links[0].id} className='mb-16'> 
              <a href={links[0].url} className='p-4 text-3xl text-mediumSecondary transition duration-1000 ease-in-out hover:text-slate-100'>
                {links[0].text}
              </a>
            </li>
            <li key={links[1].id} className='mb-16'> 
              <a href={links[1].url} className='p-4 text-3xl text-mediumSecondary transition duration-1000 ease-in-out hover:text-slate-100'>
                {links[1].text}
              </a>
            </li>
          </ul>
        </nav>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-5000 ease-in-out hover:text-white'>
          <Logo />
        </div>
        <nav>
          <ul className='flex flex-row gap-8'>
            <li key={links[2].id} className='mb-16'> 
              <a href={links[2].url} className='p-4 text-3xl text-mediumSecondary transition duration-1000 ease-in-out hover:text-slate-100'>
                {links[2].text}
              </a>
            </li>
            <li key={links[3].id} className='mb-16'> 
              <a href={links[3].url} className='p-4 text-3xl text-mediumSecondary transition duration-1000 ease-in-out hover:text-slate-100'>
                {links[3].text}
              </a>
            </li>
          </ul>
        </nav>
      </div>


      <div className='hidden md:block'> 
        <div className='absolute z-10 top-8 left-8'>
          <Logo />
        </div> 
        <GiHamburgerMenu onClick={AddClass} className='w-14 h-14 text-mediumSecondary fixed z-10 top-12 right-8 cursor-pointer transition duration-1000 ease-in-out  hover:text-slate-100' />
        <nav id="navMobile" className='fixed hidden right-0 top-0 bg-primary h-full w-96 z-30 text-center pt-96 '>
          <AiOutlineClose onClick={RemoveClass} className='w-10 h-10 text-mediumSecondary absolute z-10 top-16 left-16 cursor-pointer transition duration-1000 ease-in-out hover:text-slate-100'/>
          <ul className='flex flex-col gap-8 '>
            <li key={links[0].id} className='mb-16 block'> 
              <a onClick={RemoveClass} href={links[0].url} className='p-4 text-3xl text-mediumSecondary transition duration-1000 ease-in-out hover:text-slate-100'>
                {links[0].text}
              </a>
            </li>
            <li key={links[1].id} className='mb-16 block'> 
              <a onClick={RemoveClass} href={links[1].url} className='p-4 text-3xl text-mediumSecondary transition duration-1000 ease-in-out hover:text-slate-100'>
                {links[1].text}
              </a>
            </li>
            <li key={links[2].id} className='mb-16 block'> 
              <a onClick={RemoveClass} href={links[2].url} className='p-4 text-3xl text-mediumSecondary transition duration-1000 ease-in-out hover:text-slate-100'>
                {links[2].text}
              </a>
            </li>
            <li key={links[3].id} className='mb-16 block'> 
              <a onClick={RemoveClass} href={links[3].url} className='p-4 text-3xl text-mediumSecondary transition duration-1000 ease-in-out hover:text-slate-100'>
                {links[3].text}
              </a>
            </li>
          </ul>  
        </nav>
      </div>
    </section>
  )
}

export default Navbar