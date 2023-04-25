import Logo from '@/UI/Logo'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const links = [
  {url:"#", text:"Products"},
  {url:"#", text:"Sobre"},
  {url:"#", text:"Social"},
  {url:"#", text:"Depoimentos"},
]

const Navbar = () => {

  const renderLinks = links.map((link,i) => (
    <li key={i} className=''> 
      <Link href={link.url} className='p-4 text-mediumSecondary'>
        {link.text}
      </Link>
    </li>
  ));

  return (
    <section className='max-w-100max w-full my-0 mx-auto py-0 px-8 mb-48 flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 z-10 p-8'>
      <nav >
        <ul className='flex flex-row gap-8'>{renderLinks.slice(0,2)}</ul>
      </nav>
      <div >
        <Logo className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'/>
      </div>
      <nav>
        <ul className='flex flex-row gap-8'>{renderLinks.slice(2,4)}</ul>
      </nav>
    </section>
  )
}

export default Navbar