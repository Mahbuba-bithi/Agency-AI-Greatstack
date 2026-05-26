// import React from 'react'
// import Title from './Title'
// import assets from '../assets/Agency-AI-Assets/assets/assets'
// import { motion } from 'motion/react'

// const OurWork = () => {

//   const workData = [
//     {
//       title: 'Mobile app marketing',
//       description: 'We turn bold ideas into powerful digital solutions that connect, engage....',
//       image: assets.work_mobile_app
//     },

//     {
//       title: 'Dashboard Management',
//       description: 'We turn bold ideas into powerful digital solutions that connect, engage....',
//       image: assets.work_dashboard_management
//     },

//     {
//       title: 'Mobile app marketing',
//       description: 'We turn bold ideas into powerful digital solutions that connect, engage....',
//       image: assets.work_fitness_app
//     },
//   ]

//   return (
//     <div
//       id='our-work'
//       className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
//     >

//       <Title
//         title='Our latest work'
//         desc='From strategy to execution, we craft digital solutions that move your business forward.'
//       />

//       <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>

//         {workData.map((work, index) => (
//           <div
//             key={index}
//             className='hover:scale-102 duration-500 transition-all cursor-pointer'
//           >
//             <img
//               src={work.image}
//               className='w-full rounded-xl'
//               alt=""
//             />

//             <h3 className='mt-3 mb-2 text-lg font-semibold'>
//               {work.title}
//             </h3>

//             <p className='text-sm opacity-60 w-5/6'>
//               {work.description}
//             </p>
//           </div>
//         ))}

//       </div>

//     </div>
//   )
// }

// export default OurWork




import React from 'react'
import Title from './Title'
import assets from '../assets/Agency-AI-Assets/assets/assets'
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

const OurWork = () => {

  const workData = [
    {
      title: 'Mobile app marketing',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage....',
      image: assets.work_mobile_app
    },
    {
      title: 'Dashboard Management',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage....',
      image: assets.work_dashboard_management
    },
    {
      title: 'Mobile app marketing',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage....',
      image: assets.work_fitness_app
    },
  ]

  return (
    <motion.div
      id='our-work'
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
    >

      {/* Title */}
      <motion.div variants={item}>
        <Title
          title='Our latest work'
          desc='From strategy to execution, we craft digital solutions that move your business forward.'
        />
      </motion.div>

      {/* Grid */}
      <motion.div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>

        {workData.map((work, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className='cursor-pointer'
          >

            {/* Image */}
            <motion.img
              src={work.image}
              alt=''
              className='w-full rounded-xl'
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />

            {/* Title */}
            <h3 className='mt-3 mb-2 text-lg font-semibold'>
              {work.title}
            </h3>

            {/* Description */}
            <p className='text-sm opacity-60 w-5/6'>
              {work.description}
            </p>

          </motion.div>
        ))}

      </motion.div>

    </motion.div>
  )
}

export default OurWork