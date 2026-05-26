
import React, { useEffect } from 'react'
import assets from '../assets/Agency-AI-Assets/assets/assets'

const ThemeToggleBtn = ({ theme, setTheme }) => {

  // Detect system theme on first load
  useEffect(() => {

    const preferDarkMode =
      window.matchMedia('(prefers-color-scheme: dark)').matches

    setTheme(preferDarkMode ? 'dark' : 'light')

  }, [])

  // Apply dark class to html tag
  useEffect(() => {

    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

  }, [theme])

  return (
    <button>

      {theme === 'dark' ? (

        <img
          onClick={() => setTheme('light')}
          src={assets.sun_icon}
          className='size-8.5 p-1.5 border border-gray-500 rounded-full cursor-pointer'
          alt="sun icon"
        />

      ) : (

        <img
          onClick={() => setTheme('dark')}
          src={assets.moon_icon}
          className='size-8.5 p-1.5 border border-gray-500 rounded-full cursor-pointer'
          alt="moon icon"
        />

      )}

    </button>
  )
}

export default ThemeToggleBtn