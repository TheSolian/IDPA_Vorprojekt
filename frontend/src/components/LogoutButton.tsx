import { auth } from '@/firebase'
import { signOut } from 'firebase/auth'
import React from 'react'
import { Button } from './ui/button'

interface LogoutButtonProps {}

const LogoutButton: React.FC<LogoutButtonProps> = ({}) => {
  function handleClick() {
    signOut(auth)
  }

  return (
    <Button variant={'default'} onClick={handleClick}>
      Logout
    </Button>
  )
}

export default LogoutButton
