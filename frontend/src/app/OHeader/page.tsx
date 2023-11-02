import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const OHeader = () => {

  return (
    <div className='hidden sm:flex'>
      <Link
      href="/">
      <Image
        src="/8.png"
        alt="Logo"
        width={150}
        height={100}
      />
      </Link>
      <h1 className='text-[2.5rem] text-center mb-10 text-[#007FFF] font-bold sm:mx-[10vw] lg:mx-[34vw] lg:mb-20 md:mx-[20vw] md:my-[2rem]'>Organization</h1>
    </div>
  );
}

export default OHeader;
