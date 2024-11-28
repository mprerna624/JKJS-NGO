import React from 'react';
import { ngo_logo, ngo_logo_invert } from '../assets';

function Logo({bg}) {
  return bg === 'dark' ? (
    <img src={ngo_logo_invert} alt='Logo' width={100} height={80} />
  ) :
  (
    <img src={ngo_logo} alt='Logo' width={100} height={80} />
  )
}

export default Logo