"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import HeaderLink from './HeaderLink'
import {  Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid'
import Menu from './Menu'

const headerLink = [
    {
        title: "Home",
        path: "#home"
    },
    {
      title: "About",
      path: "#about"
  },
  {
    title: "Projects",
    path: "#projects"
},
    {
         title: "Contact",
        path: "#contact"
    }
]

function Header() {
const [navbarOpen , setNavbarOpen] = useState(false);
  return (
   <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#dda02db9] bg-opacity-100">
   <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
     <Link href="/" className='text-2xl  md:text-3xl bg-gradient-to-r from-amber-700 to-amber-400 font-semibold'>MOHAMMAD AHRAS
     </Link>
     <div className='mobile-menu block md:hidden'>
      {
       !navbarOpen ? (
            <button onClick={()=> setNavbarOpen(true)} className='text-slate-200 flex items-center px-3 py-2 border '>
            <Bars3Icon className='h-5 w-5' />
             </button>

        ) : (
          <button onClick={()=> setNavbarOpen(false)} className='text-slate-200 flex items-center px-3 py-2 border '>
            <XMarkIcon className='h-5 w-5' />
          </button>

        )
      }
     </div>
     <div id="header" className="hidden md:block md:w-auto menu">
     <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
     {headerLink.map((link, index) => (
              <li key={index}>
                <HeaderLink href={link.path} title={link.title} />
              </li>
            ))}
     </ul>
     
     </div>
    </div>
    {navbarOpen ? <Menu links={headerLink} /> :null}
    </nav>
  )
}


export default Header

