// import React from 'react'
// import assets from '../assets/Agency-AI-Assets/assets/assets'
// import Title from './Title'
// import ServiceCard from './ServiceCard'
// import { motion } from 'motion/react'

// const Services = () => {
//   const servicesData = [
//     {
//       title: 'Advertising',
//       description: 'We turn bold ideas into powerful digital solutions that connect, engage....',
//       icon: assets.ads_icon
//     },

//     {
//       title: 'Content marketing',
//       description: 'We turn bold ideas into powerful digital solutions that connect, engage....',
//       icon: assets.marketing_icon
//     },
//     {
//       title: 'Content writing',
//       description: 'We turn bold ideas into powerful digital solutions that connect, engage....',
//       icon: assets.content_icon
//     },

//     {
//       title: 'Social media',
//       description: 'We turn bold ideas into powerful digital solutions that connect, engage....',
//       icon: assets.social_icon
//     },


//   ]

//   return (
//     <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
//       <img 
//   src={assets.bgImage2} 
//   alt='' 
//   className='absolute -top-24 -left-24 z-[-1] dark:hidden' 
// />
//       <Title title="How can we help?" desc='From strategy to excution, we craft digital solutions that move your business forwad.' />

//       <div className='flex flex-col md:grid grid-cols-2'>
//         {servicesData.map((service,index)=>(
//         <ServiceCard key={index} service={service} index={index}/>
//         ))}
//       </div>
//        </div>
//   )
// }

// export default Services




import React from 'react'
import assets from '../assets/Agency-AI-Assets/assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from 'motion/react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const Services = () => {
  const servicesData = [
    {
      title: 'Advertising',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage....',
      icon: assets.ads_icon
    },
    {
      title: 'Content marketing',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage....',
      icon: assets.marketing_icon
    },
    {
      title: 'Content writing',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage....',
      icon: assets.content_icon
    },
    {
      title: 'Social media',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage....',
      icon: assets.social_icon
    },
  ]

  return (
    <motion.div
      id='services'
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
    >

      {/* Background image */}
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        src={assets.bgImage2}
        alt=''
        className='absolute -top-24 -left-24 z-[-1] dark:hidden'
      />

      {/* Title */}
      <motion.div variants={item}>
        <Title
          title="How can we help?"
          desc="From strategy to execution, we craft digital solutions that move your business forward."
        />
      </motion.div>

      {/* Cards */}
      <motion.div className='flex flex-col md:grid grid-cols-2 gap-6'>
        {servicesData.map((service, index) => (
          <motion.div key={index} variants={item}>
            <ServiceCard service={service} index={index} />
          </motion.div>
        ))}
      </motion.div>

    </motion.div>
  )
}

export default Services
