import React, { useEffect } from 'react'
import Sidebar from './components/Sidebar'

const Dashboard = () => {
  const checkAuth = () => {
    const token = localStorage.getItem('token')
    if (token == null) {
      window.location.href = '/login'
    }
  }

  useEffect(() => {
    checkAuth()
  }, [])
  return (
    <div className='fullbg'>

      <div className='left'>
        <Sidebar />
      </div>
      <div className='right'></div>
    </div>
  )
}

export default Dashboard