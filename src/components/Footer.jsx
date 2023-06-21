import React from 'react'

const Footer = () => {
  return (
    <div className='shadow-lg mt-auto bg-[#fe9801] h-16 flex items-center justify-center text-white font-semibold text-xl'>{(new Date().getFullYear())} &copy; FracFin</div>
  )
}

export default Footer