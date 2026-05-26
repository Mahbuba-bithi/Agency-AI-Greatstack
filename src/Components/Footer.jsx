// import React from 'react'
// import assets from "../assets/Agency-AI-Assets/assets/assets"
// import { motion } from 'motion/react'



// const Footer = ({ theme }) => {
//   return (
//     <div className='bg-slate-300 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>

//       {/* ================= FOOTER TOP ================= */}
//       <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>

//         {/* LEFT SIDE */}
//         <div className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>

//           <img
//             src={theme === 'dark' ? assets.logoDark : assets.logo}
//             className='w-32 sm:w-44'
//             alt="logo"
//           />

//           <p className='max-w-md leading-6'>
//             From strategy to execution, we craft digital
//             solutions that move your business forward.
//           </p>

//           <ul className='flex gap-6 flex-wrap'>

//             <li>
//               <a
//                 className='hover:text-primary transition'
//                 href="#hero"
//               >
//                 Home
//               </a>
//             </li>

//             <li>
//               <a
//                 className='hover:text-primary transition'
//                 href="#services"
//               >
//                 Services
//               </a>
//             </li>

//             <li>
//               <a
//                 className='hover:text-primary transition'
//                 href="#work"
//               >
//                 Our Work
//               </a>
//             </li>

//             <li>
//               <a
//                 className='hover:text-primary transition'
//                 href="#team"
//               >
//                 Team
//               </a>
//             </li>

//             <li>
//               <a
//                 className='hover:text-primary transition'
//                 href="#contact-us"
//               >
//                 Contact Us
//               </a>
//             </li>

//           </ul>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className='text-gray-600 dark:text-gray-400 max-w-lg'>

//           <h3 className='font-semibold text-lg'>
//             Subscribe to our newsletter
//           </h3>

//           <p className='text-sm mt-2 mb-6 leading-6'>
//             The latest news, articles, and resources,
//             sent to your inbox weekly.
//           </p>

//           <div className='flex flex-col sm:flex-row gap-3 text-sm'>

//             <input
//               type="email"
//               placeholder='Your email address'
//               className='w-full p-3 outline-none rounded border border-gray-300 dark:border-gray-500 dark:bg-transparent dark:text-gray-200'
//             />

//             <button
//               className='bg-primary text-white px-6 py-3 rounded hover:opacity-90 transition'
//             >
//               Subscribe
//             </button>

//           </div>
//         </div>

//       </div>

//       {/* ================= DIVIDER ================= */}
//       <hr className='border-gray-300 dark:border-gray-600 my-6' />

//       {/* ================= FOOTER BOTTOM ================= */}
//       <div className='flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 text-sm text-gray-600 dark:text-gray-400'>

//         <p>
//           Copyright 2026 © GreatStack.
//           All rights reserved.
//         </p>

//         {/* SOCIAL ICONS */}
//         <div className='flex items-center gap-4'>

//           <a href="#">
//             <img
//               src={assets.facebook_icon}
//               alt="facebook"
//               className='w-5 hover:scale-110 transition'
//             />
//           </a>

//           <a href="#">
//             <img
//               src={assets.twitter_icon}
//               alt="twitter"
//               className='w-5 hover:scale-110 transition'
//             />
//           </a>

//           <a href="#">
//             <img
//               src={assets.linkedin_icon}
//               alt="linkedin"
//               className='w-5 hover:scale-110 transition'
//             />
//           </a>

//           <a href="#">
//             <img
//               src={assets.instagram_icon}
//               alt="instagram"
//               className='w-5 hover:scale-110 transition'
//             />
//           </a>

//         </div>

//       </div>

//     </div>
//   )
// }

// export default Footer




import React from 'react'
import assets from "../assets/Agency-AI-Assets/assets/assets"
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

const Footer = ({ theme }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className='bg-slate-300 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'
    >

      {/* ================= FOOTER TOP ================= */}
      <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>

        {/* LEFT SIDE */}
        <motion.div variants={item} className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>

          <img
            src={theme === 'dark' ? assets.logoDark : assets.logo}
            className='w-32 sm:w-44'
            alt="logo"
          />

          <p className='max-w-md leading-6'>
            From strategy to execution, we craft digital
            solutions that move your business forward.
          </p>

          <ul className='flex gap-6 flex-wrap'>
            {["hero", "services", "our-work", "team", "contact-us"].map((link, i) => (
              <motion.li key={i} variants={item}>
                <a
                  className='hover:text-primary transition'
                  href={`#${link}`}
                >
                  {link.replace("-", " ")}
                </a>
              </motion.li>
            ))}
          </ul>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div variants={item} className='text-gray-600 dark:text-gray-400 max-w-lg'>

          <h3 className='font-semibold text-lg'>
            Subscribe to our newsletter
          </h3>

          <p className='text-sm mt-2 mb-6 leading-6'>
            The latest news, articles, and resources,
            sent to your inbox weekly.
          </p>

          <div className='flex flex-col sm:flex-row gap-3 text-sm'>

            <input
              type="email"
              placeholder='Your email address'
              className='w-full p-3 outline-none rounded border border-gray-300 dark:border-gray-500 dark:bg-transparent dark:text-gray-200'
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-primary text-white px-6 py-3 rounded transition'
            >
              Subscribe
            </motion.button>

          </div>

        </motion.div>

      </div>

      {/* ================= DIVIDER ================= */}
      <motion.hr
        variants={item}
        className='border-gray-300 dark:border-gray-600 my-6'
      />

      {/* ================= FOOTER BOTTOM ================= */}
      <motion.div
        variants={item}
        className='flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 text-sm text-gray-600 dark:text-gray-400'
      >

        <p>
          Copyright 2026 © GreatStack.
          All rights reserved.
        </p>

        {/* SOCIAL ICONS */}
        <div className='flex items-center gap-4'>

          {[assets.facebook_icon, assets.twitter_icon, assets.linkedin_icon, assets.instagram_icon].map((icon, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ scale: 1.2, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={icon}
                alt=""
                className='w-5'
              />
            </motion.a>
          ))}

        </div>

      </motion.div>

    </motion.div>
  )
}

export default Footer