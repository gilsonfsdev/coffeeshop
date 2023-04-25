import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.svg" alt="bubble coffe" width={77} height={38} />
    </Link>
  )
}

export default Logo



