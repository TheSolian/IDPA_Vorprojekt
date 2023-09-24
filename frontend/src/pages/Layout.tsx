import Navbar from '@/components/Navbar'
import { auth } from '@/firebase'
import { Navigate, Outlet } from 'react-router-dom'

function Layout() {
  return auth.currentUser ? (
    <div>
      <Navbar />
      <Outlet />
    </div>
  ) : (
    <Navigate to='/login' />
  )
}

export default Layout
