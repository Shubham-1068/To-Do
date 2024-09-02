import React from 'react'
import logo from '../assets/logo.svg'

function Navbar() {
  return (
    <>
      <div className="h-screen w-24 flex flex-col items-center pt-3">
        <img src={logo} alt="logo" className='h-20 w-20' />

        <ul className='h-[70%] flex justify-center flex-col gap-12'>
            <li>
                <a href="https://github.com/Shubham-1068" target='_blank'><img src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000" alt="github" className='h-10 cursor-pointer hover:shadow-md hover:shadow-slate-400 ' /></a>
            </li>
            <li>
                <img src="https://img.icons8.com/?size=100&id=WFR6FtraVgyS&format=png&color=000000" alt="dictionary" className='h-10 cursor-pointer hover:shadow-md hover:shadow-slate-400 ' />
            </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
