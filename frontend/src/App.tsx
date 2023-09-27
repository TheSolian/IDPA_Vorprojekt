import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CostumerPage from './pages/CostumerPage'
import HomePage from './pages/HomePage'
import Layout from './pages/Layout'
import AuthLayout from './pages/auth/AuthLayout'
import LoginPage from './pages/auth/LoginPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='customer/:id' element={<CostumerPage />} />
        </Route>
        <Route path='/login' element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
