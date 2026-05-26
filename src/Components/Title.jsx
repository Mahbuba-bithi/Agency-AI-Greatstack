// import React from 'react'
// import { motion } from 'motion/react'

// const Title = ({title,desc}) => {
//   return (
//     <>
//     <h2 className='text-3xl sm:text-5xl font-medium '>{title}</h2>
//     <p className='max-w-lg text-center text-gray-500 dark:text-white/75 mb-6'>{desc}</p>
    
    
//     </>
//   )
// }

// export default Title


import React from 'react'
import { motion } from 'motion/react'

const Title = ({ title, desc }) => {
  return (
    <div className='flex flex-col items-center text-center'>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className='text-3xl sm:text-5xl font-medium'
      >
        {title}
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true }}
        className='max-w-lg text-center text-gray-500 dark:text-white/75 mb-6'
      >
        {desc}
      </motion.p>

    </div>
  )
}

export default Title
