import React from 'react'
import java from '../assets/java.png'
import c from '../assets/c.png'
import cPlusPlus from '../assets/c++.png'
import cSharp from '../assets/c#.png'
import javaScript from '../assets/javascript.png'
import python from '../assets/pyton.png'

import aws from '../assets/aws.png'
import azure from '../assets/azure.png'
import firebase from '../assets/firebase.png'
import reacticon from '../assets/react.png'
import nodejs from '../assets/node.png'
import mySQL from '../assets/mysql.png'


const Experience = () => {
  return (
    <div id='phoneScreen' name='experience' className=' w-full h-screen bg-[#7a8866] text-white' >
        {/*Container for Information*/}
        <div className='max-w-[1000px] mx-auto my-auto p-4 flex flex-col justify-center h-[15in]'>
            <div>
                <p id='small' className='text-6xl font-bold inline pb-1 border-b-4 border-white text-[#E8DEFC]'>Experience</p>
                <p className='pt-6'>I have 3+ years of coding experience through university</p>
                <p className=''>Currently no professional experience</p>
            </div>

            <div className='text-center pt-10'>
            <p className='text-2xl text-center font-bold inline py-4 text-[#E8DEFC]'>Languages</p>
            <p>These are the my most frequently used languages throughout the past 3 years </p>
            </div>

            {/**Java */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
              <div id='round' className='shadow-md shadow-[#3d3d3d] hover:scale-110 duration-500'>
                  <img id='smallIcon' className='w-20 mx-auto' src={java} alt="Java icon" />
                  <p className='my-4'>Java</p>
              </div>

            {/**JavaScript */}
              <div id='round' className='shadow-md shadow-[#3d3d3d] hover:scale-110 duration-500'>
                  <img id='smallIcon' className='w-20 mx-auto' src={javaScript} alt="Javascript icon" />
                  <p className='my-4'>JavaScript</p>
              </div>

            {/**C# */}
              <div id='round' className='shadow-md shadow-[#3d3d3d] hover:scale-110 duration-500'>
                  <img id='smallIcon' className='w-20 mx-auto' src={cSharp} alt="c# icon" />
                  <p className='my-4'>C#</p>
              </div>

            {/**c++ */}
              <div id='round' className='shadow-md shadow-[#3d3d3d] hover:scale-110 duration-500'>
                  <img id='smallIcon' className='w-20 mx-auto' src={cPlusPlus} alt="c++ icon" />
                  <p className='my-4'>C++</p>
              </div>

            {/**MYSQL */}
              <div id='round' className='shadow-md shadow-[#3d3d3d] hover:scale-110 duration-500'>
                  <img id='smallIcon' className='w-20 mx-auto' src={c} alt="c icon" />
                  <p className='my-4'>C</p>
              </div>

            {/**c */}
              <div id='round' className='shadow-md shadow-[#3d3d3d] hover:scale-110 duration-500'>
                  <img id='smallIcon' className='w-20 mx-auto' src={python} alt="pthon icon" />
                  <p className='my-4'>Python</p>
              </div>
            </div>
            
            {/**Frameworks & Query */}
            <div className='text-center pt-10'>
            <p className='text-2xl text-center font-bold inline py-4 text-[#E8DEFC]'>Frameworks & Query Software</p>
            <p>These are the my most frequently used Frameworks and Query + Cloud Software throughout the past 3 years</p>
            </div>

            {/**React */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
              <div id='round' className='shadow-md shadow-[#3d3d3d] hover:scale-110 duration-500'>
                  <img id='smallIcon' className='w-20 mx-auto' src={reacticon} alt="React icon" />
                  <p className='my-4'>React JS</p>
              </div>

            {/**Node JS */}
              <div id='round' className='shadow-md shadow-[#3d3d3d] hover:scale-110 duration-500'>
                  <img id='smallIcon' className='w-20 mx-auto' src={nodejs} alt="Node icon" />
                  <p className='my-4'>Node JS</p>
              </div>

              {/**MYSQL */}
              <div id='round' className='shadow-md shadow-[#3d3d3d] hover:scale-110 duration-500'>
                  <img id='smallIcon' className='w-20 mx-auto' src={mySQL} alt="mySQL icon" />
                  <p className='my-4'>mySQL</p>
              </div>

            {/**AWS */}
              <div id='round' className='shadow-md shadow-[#3d3d3d] hover:scale-110 duration-500'>
                  <img id='smallIcon' className='w-20 mx-auto' src={aws} alt="aws icon" />
                  <p className='my-4'>AWS</p>
              </div>

            {/**Azure */}
              <div id='round' className='shadow-md shadow-[#3d3d3d] hover:scale-110 duration-500'>
                  <img id='smallIcon' className='w-20 mx-auto' src={azure} alt="azure icon" />
                  <p className='my-4'>Azure</p>
              </div>

            {/**Firebase */}
              <div id='round' className='shadow-md shadow-[#3d3d3d] hover:scale-110 duration-500'>
                  <img id='smallIcon' className='w-20 mx-auto' src={firebase} alt="firebase icon" />
                  <p className='my-4'>Firebase</p>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Experience