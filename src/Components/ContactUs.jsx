import React from 'react'
import Title from './Title'
import assets from '../assets/Agency-AI-Assets/assets/assets'
import toast from 'react-hot-toast'

const ContactUs = () => {

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    // তোমার Web3Forms access key এখানে দাও
    formData.append("access_key", "2697fbee-aaf7-4048-8e26-79c09c36a967");

    try {

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form Submitted Successfully");
        event.target.reset();
      } else {
        toast.error(data.message);
      }

    } catch (error) {
      toast.error("An error occurred while submitting the form");
    }
  };

  return (
    <div
      id='contact-us'
      className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
    >

      <Title
        title='Reach out to us'
        desc='Have a project in mind? We would love to hear from you. Let’s work together to create something amazing.'
      />

      <form
        onSubmit={onSubmit}
        className='grid sm:grid-cols-2 gap-5 w-full max-w-2xl'
      >

        {/* Name */}
        <div>
          <p className='mb-2 text-sm font-medium'>
            Your Name
          </p>

          <div className='flex items-center border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2'>

            <img
              src={assets.person_icon}
              alt=''
              className='w-5 mr-2'
            />

            <input
              name='name'
              type='text'
              placeholder='Enter your name'
              className='w-full bg-transparent focus:outline-none'
              required
            />

          </div>
        </div>

        {/* Email */}
        <div>
          <p className='mb-2 text-sm font-medium'>
            Email Address
          </p>

          <div className='flex items-center border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2'>

            <img
              src={assets.email_icon}
              alt=''
              className='w-5 mr-2'
            />

            <input
              name='email'
              type='email'
              placeholder='Enter your email'
              className='w-full bg-transparent focus:outline-none'
              required
            />

          </div>
        </div>

        {/* Message */}
        <div className='sm:col-span-2'>
          <p className='mb-2 text-sm font-medium'>
            Message
          </p>

          <textarea
            name='message'
            rows={8}
            placeholder='Write your message here'
            className='w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 bg-transparent focus:outline-none resize-none'
            required
          />
        </div>

        {/* Button */}
        <button
          type='submit'
          className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full hover:scale-105 transition-all'
        >
          Send Message

          <img
            src={assets.arrow_icon}
            width={14}
            alt=''
          />
        </button>

      </form>

    </div>
  )
}
 export default ContactUs
