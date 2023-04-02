import React from 'react'
import { BoltIcon, ExclamationTriangleIcon, SunIcon, } from '@heroicons/react/24/outline'


const page = () => {
  return (
    <div className='flex flex-col items-center justify-center text-white h-screen px-2'>
      <h1 className='text-5xl font-bold mb-20'>Chat GPT</h1>

      <div className='flex gap-6 text-center'>
        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <SunIcon className='h-8 w-8 text-white' />
            {/* Sun icon */}
            <h2>Examples</h2>
          </div>

          <div className='space-y-2'>
            <p className='infoText'>Explain Something to me</p>
            <p className='infoText'>What is a difference between a dog and a cat?</p>
            <p className='infoText'>What is the color of sun?</p>
          </div>
        </div>


        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <BoltIcon className='h-8 w-8 text-white' />
            {/* Sun icon */}
            <h2>Capabilities</h2>
          </div>

          <div className='space-y-2'>
            <p className='infoText'>Change the ChatGtpt Model to use</p>
            <p className='infoText'>Messages are stored in a Database</p>
            <p className='infoText'>Hot Toast notification while ChatGpt thinking!</p>
          </div>
        </div>
        
        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <ExclamationTriangleIcon className='h-8 w-8 text-white' />
            {/* Sun icon */}
            <h2>Limitations</h2>
          </div>

          <div className='space-y-2'>
            <p className='infoText'>May Ocassionaly generate incorrect information</p>
            <p className='infoText'>May give some biased answers</p>
            <p className='infoText'>Limited knowledge of events after 2021</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page