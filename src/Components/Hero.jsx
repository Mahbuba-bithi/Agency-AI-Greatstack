import React from 'react'
import assets from '../assets/Agency-AI-Assets/assets/assets'

const Hero = () => {
  return (
    <div
      id='hero'
      className='relative flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-x-hidden text-gray-700 dark:text-white'
    >

      {/* 🔵 Background decoration */}
      <div className='absolute inset-0 overflow-hidden'>
        <img
          src={assets.bgImage1}
          alt=''
          className='absolute top-0 right-0 w-[280px] sm:w-[450px] md:w-[600px] opacity-80 dark:hidden pointer-events-none select-none'
        />
      </div>

      {/* 🟢 Badge */}
      <div className='relative z-10 inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full'>
        <img className='w-16 sm:w-20' src={assets.group_profile} alt='' />
        <p className='text-xs font-medium'>Trusted by 10k+ people</p>
      </div>

      {/* 🟣 Heading */}
      <h1 className='relative z-10 text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl'>
        Turning imagination into{' '}
        <span className='bg-gradient-to-r from-[#5044e5] to-[#4d8cea] bg-clip-text text-transparent'>
          digital
        </span>{' '}
        impact.
      </h1>

      {/* 🟡 Description */}
      <p className='relative z-10 text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-lg pb-3'>
        Creating meaningful connections and turning big ideas into interactive digital experiences
      </p>

      {/* 🟠 Hero Image */}
      <div className='relative z-10 w-full flex justify-center'>
        <img
          src={assets.hero_img}
          alt=''
          className='w-full max-w-6xl mx-auto'
        />
      </div>

    </div>
  )
}

export default Hero