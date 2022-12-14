import React from 'react'

const Contact = () => {
  return (
    <div id='contactSmall' name='contact' className='w-full h-screen pt-[3in] flex justify-center items-center p-4 bg-[#7a8866] text-white'>
        <form method='post' action='https://getform.io/f/6cd85a9b-a90d-4a7d-98ba-c191732f25cf' className=' flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p id='small' className='text-6xl font-bold inline pt-6 border-b-4 border-white text-[#E8DEFC]'>Contact</p>
                <p className='pt-6'>Submit the form below or you can reach me at bro11.2001@gmail.com</p>
            </div>
            <input className='my-.5 p-2 text-black' type="text" placeholder="Name" name='name' />
            <input className='my-2 p-2 text-black' type="email" placeholder="Email" name='email' />
            <textarea className='p-2 mb-4 text-black' name='message' cols='30' rows='10' placeholder='Message'></textarea>
            <div className='items-center text-center'>
            <button className='border-4 p-2 items-center hover:bg-[#E8DEFC] hover:text-black hover:border-[#7a8866]'>Connect With Me</button>
            </div>
        </form>
    </div>
  )
}

export default Contact