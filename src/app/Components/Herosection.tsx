import React from 'react'
import Image from 'next/image';

const Herosection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 pt-7 sm:grid-cols-12">
         <div className="col-span-7 place-self-center text-center sm:text-left">
      <h1 className="text-white mb-4  text-4xl sm:lg:text-4xl lg:text-6xl font-extrabold">
       <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> Hello, I&apos;m</span> 
       Kashaf Fatima </h1>
      <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
        Specializing in creating stunning websites and user interfaces
        </p>
        <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-black gap-8'>Hire Me</button>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-black mt-3'>Download CV</button>
        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"></span></div>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
  <Image 
    src="/images/herosectionpic.jfif" 
    alt="hero image"
    width={300}
    height={300}
    className="rounded-full shadow-lg object-cover"
             />
            </div>
          </div>
        </div>
    </section>
  )
};

export default Herosection
