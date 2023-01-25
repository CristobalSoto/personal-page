import React, { useState } from 'react';
const tittleStyle = {
  'display': 'flex',
  'justifyContent': 'space-between',
  'background': '-webkit-linear-gradient(#0367a1, #2cc98d)',
  'WebkitBackgroundClip': 'text',
  'marginLeft': '20%',
  'marginRight': '20%'
}

const Header = () => {

  return (
    <h1 style={tittleStyle}>
        <a  href="/">Cristóbal Soto</a >
    </h1>
  )
}
export default Header