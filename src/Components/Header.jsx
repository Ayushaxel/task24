import React from 'react'

const Header = () => {
  return (
    <nav className='flex py-5 bg-[#eee] px-5 shadow justify-between'>
        <div className='logo hover:text-blue-500 cursor-pointer duration-300 text-3xl'>Logo</div>

        <ul className='flex gap-x-10 text-2xl'>
            <li className='hover:text-blue-500 cursor-pointer duration-300'>Home</li>
            <li className='hover:text-blue-500 cursor-pointer duration-300'>Categories</li>
            <li className='hover:text-blue-500 cursor-pointer duration-300'>About Us</li>
        </ul>
        
    </nav>
  )
}

export default Header