// import React from 'react'
// import { company_logos } from '../assets/Agency-AI-Assets/assets/assets'
// import { motion } from 'motion/react'

// const TrustedBy = () => {
//   return (
//     <div className='flex flex-col items-center px-4 sm:*:px-12 lg-px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80'>
//       <h3 className='font-semibold'>
//         Trusted by Leading Companies
//       </h3>

//       <div className='flex items-center justify-center flex-wrap gap-10 m-4'>
        
//         {/* jehetu array eijoonne map method */}

//         {company_logos.map((logo, index) => (

//           <img
//             key={index}
//             src={logo}
//             alt=''
//             className='max-h-5 sm:max-h-6 dark:drop-shadow-xl'
//           />

//         ))}

//       </div>
//     </div>
//   )
// }

// export default TrustedBy





import React from 'react'
import { company_logos } from '../assets/Agency-AI-Assets/assets/assets'
import { motion } from 'motion/react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

const TrustedBy = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className='flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80'
    >

      {/* Heading */}
      <motion.h3
        variants={item}
        className='font-semibold'
      >
        Trusted by Leading Companies
      </motion.h3>

      {/* Logos */}
      <motion.div className='flex items-center justify-center flex-wrap gap-10 m-4'>
        {company_logos.map((logo, index) => (
          <motion.img
            key={index}
            src={logo}
            alt=''
            variants={item}
            className='max-h-5 sm:max-h-6 dark:drop-shadow-xl'
          />
        ))}
      </motion.div>

    </motion.div>
  )
}

export default TrustedBy