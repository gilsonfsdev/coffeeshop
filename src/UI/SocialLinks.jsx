import Link from 'next/link';
import React from 'react';
import { RiFacebookFill, RiTwitterFill, RiInstagramLine } from 'react-icons/ri';

const socialLinks = [
  {url: "#", component: <RiFacebookFill className='h-10 w-10 text-secondary transition-all duration-5000 ease-in-out hover:text-white'/> },
  {url: "#", component: <RiTwitterFill className='h-10 w-10 text-secondary transition-all duration-5000 ease-in-out hover:text-white'/> },
  {url: "#", component: <RiInstagramLine className='h-10 w-10 text-secondary transition-all duration-5000 ease-in-out hover:text-white'/> },
];

const SocialLinks = () => {

  const renderLinks = socialLinks.map((link,i) => (
    <li key={i}>
      <Link href={link.url}>{link.component}</Link>
    </li>
  ));

  return (
    <ul className='flex gap-8 -ml-2 text-9xl'>{renderLinks}</ul>
  )
}

export default SocialLinks