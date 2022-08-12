import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        
        {/*container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white'>
            <p className='text-2xl'>Hello, My Name Is</p>
            <h1 className='text-8xl sm:9xl font-bold text-[#ccd6f6]'>Brody McColeman</h1>
            <h4 className='py-2'>Student & Sofware Developer/Engineer</h4>
            <div>
            <button className=' group border-4 px-6 py-2 my-2 flex items-center hover:bg-[#ccd6f6] hover:text-black hover:border-black'>Connect With Me 
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
            </button>
            </div>
        </div>
    </div>
  )
}

export default Home