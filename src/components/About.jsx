import React from 'react'
import me from '../assets/Me.png'

const About = () => {
  return ( 
  <div name='about' className='w-full h-screen bg-[#7a8866] text-white'>
    
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
          <img src={me} alt="my logo" id='meAboutLogo' style={{width: '500px'}} className='px-2 py-2'/>
            <p id='small' className='text-6xl font-bold inline border-b-4 border-white text-[#E8DEFC]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div id='small' className='sm:text-right text-4xl font-bold text-[#E8DEFC]'>
              <p>Hello, I'm Brody.</p>
              <p>Pleassure to meet you. Enjoy your stay!</p>
            </div>
            <div>
            <p>Hello, as you know by now my name is Brody. I am 21 years old and currently am a student enrolled at Lakehead University studying Computer Science, I am in a year 4 of my 
              4-year joint bachelors degree program where I will receive a BSc in computer science (from Lakehead University) and a computer programming diploma (from Georgian Collage) 
              and am set to graduate April 2023, it is my hope to have landed a position with a company by that time.</p>
            <p>I am a highly motivated and competitive individual who has a passion for programming and working in tech/IT environments. I excel working in team environments as well as on my own, 
              I am always looking to improve my skill set and looking for a position where i may grow as a developer and as a person. Programming, computers, and tech has always been a passion of 
              mine, I am incredible excited to graduate so i may start the next chapter of my life as a software developer/engineer. </p>

            <p>I enjoy Frontend Developing; however, I have a strong passion for Backend Development, IT, System Analysis, Network Security. With that being said, I am open to all areas of work 
              within the software engineering world where I may learn new things and can have the ability to grow as an individual as well as acquire new skills for the future. </p> 
            </div>
          </div>
      </div>
    </div>

  )
}

export default About