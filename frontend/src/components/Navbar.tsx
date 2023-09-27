import React from 'react'
import { Link } from 'react-router-dom'
import LogoutButton from './LogoutButton'
import ThemeToggle from './ThemeToggle'
import { Separator } from './ui/separator'

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div>
      <div className='flex justify-between py-4 px-8'>
        <Link to={'/'} className='text-3xl font-semibold'>
          Marchzinsrechner
        </Link>
        <div className='flex gap-4'>
          <ThemeToggle />
          <LogoutButton />
        </div>
      </div>
      <Separator />
    </div>
  )
}

export default Navbar
