import React from 'react'
import LogoutButton from './LogoutButton'
import ThemeToggle from './ThemeToggle'
import { Separator } from './ui/separator'

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div>
      <div className='flex justify-between py-4 px-8'>
        <div className='text-3xl font-semibold'>Home</div>
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
