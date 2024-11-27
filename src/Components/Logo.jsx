import React from 'react';
import { logo_name, ngo_logo, ngo_logo_invert } from '../assets';

function Logo({bg}) {
  return bg === 'dark' ? (
    <img src={ngo_logo_invert} alt='Logo' width={100} height={80} />
  ) :
  ( <>
      <img src={logo_name} alt="Logo" width={100} height={80} className='inline-block sm:hidden md:inline-block lg:hidden' />
      <img src={ngo_logo} alt='Logo' width={100} height={80} className='hidden sm:inline-block md:hidden lg:inline-block' />
    </>
  )
}

export default Logo