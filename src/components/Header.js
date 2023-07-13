import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'
import { FaTimes } from 'react-icons/fa'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 150
      setIsScrolled(isScrolled)
    }

    // Attach the event listener
    window.addEventListener('scroll', handleScroll)
    return () => {
      // Clean up the event listener
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`w-full h-auto bg-white shadow-md p-4 z-50 sticky top-0 transition-all duration-200 ${isScrolled ? 'bg-opacity-100' : 'bg-opacity-100'}`}>
      <nav className='max-w-[1400px] m-auto flex justify-between items-center'>
        <Image
          src="/images/logo.png"
          className='h-[70px] w-auto'
          height={500}
          width={500}
          alt="Company logo"
        />
        {isOpen
          ? null
          : <Image
            src="/images/hamburger.svg"
            className='h-[40px] w-auto block sm:hidden cursor-pointer'
            height={60}
            width={60}
            alt="mobile menu"
            onClick={toggleMenu}
          />}
        <ul className={`w-fit flex  gap-11 sm:flex ${
          isOpen ? 'pt-20 w-[60%] items-start fixed top-0 right-0 bottom-0 p-6 bg-gray-100 z-50 flex-col align-start sm:relative sm:bg-transparent sm:p-0 sm:flex-row transform translate-x-0 sm:translate-x-0' : 'hidden transform translate-x-full sm:translate-x-0'
        } transition-transform items-center duration-200 ease-in-out`}>
          {isOpen
            ? <FaTimes
              className='h-6 w-6 block sm:hidden cursor-pointer absolute top-0 left-0 m-4'
              onClick={toggleMenu}
            />
            : null}
          <li><Link href="/"><span>Home</span></Link></li>
          <li><Link href="/about"><span>Portfolio</span></Link></li>
          <li><Link href="/services"><span>Services</span></Link></li>
          <li><Link href="/team"><span>Team</span></Link></li>
          <li><Link href="/careers"><span>Careers</span></Link></li>
          <li><Link href="/about"><span>About</span></Link></li>
          <Button variant="primary">Contact Us</Button>
        </ul>
      </nav>
    </header>
  )
}

export default Header
