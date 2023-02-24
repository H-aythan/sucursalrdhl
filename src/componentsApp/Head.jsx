import React from 'react'
import logo from '../assets/dhl/menu.png'
const Head = () => {
  return (
      <header className='w-screen flex justify-between items-center fixed top-0 left-0 z-50'>
            <img className='h-14' src={logo}/>        
      </header>
      )
}

export default Head