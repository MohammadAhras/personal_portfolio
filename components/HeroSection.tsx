"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';


function HeroSection() {
  return (
    <section className='lg:py-16'>
     <div className="grid grid-cols-1 sm:grid-cols-12">
       <div className='col-span-7 place-self-center sm:text-left'>
        <h1 className='text-white mb-4 text-3xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold'>
         <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-lime-600">Hey, I&apos;m{" "}</span> 
         <br/>
         <TypeAnimation
      sequence={[
        'MOHAMMAD AHRAS',
        1000, 
        'Front End Developer',
        1000,
        'UX/UI Designer',
        1000,
        
      ]}
      wrapper="span"
      speed={40}
      repeat={Infinity}
    />
       </h1>
        <p className='text-[#ccb9e5] text-base sm:text-lg mb-6 lg:text-xl'>
        I&apos;m a passionate developer eager to build user-friendly digital experiences using technologies like React Node.js  and React Native.
        </p>
       
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
           <div className='bg-[#11071F] w-[250px] h-[100px] lg:w-[300px] lg:h-[400px] relative'>
             <Image
             src="/image/hero1.jpg"
             alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={240}
             />
            </div>
         </div>
     </div>
    </section>
  )
}

export default HeroSection
