import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
const Sidebar = ({ active }) => {
    const handlelogout = () => {
        localStorage.removeItem('token')
        window.location.href = '/login'
    }
    return (
        <div className='sidebar'>
            <h1>Packers & Movers</h1>
            <Link to='/dashboard' style={{ textDecoration: 'none', width: '100%' }}>
                <p>Dashboard</p>
            </Link>
            <Link to='/viewsubscriptions' style={{ textDecoration: 'none', width: '100%' }}>
                <p>View Subscriptions</p>
            </Link>
            <p>Users</p>
            <Link to='/addsubscription'
                style={{ textDecoration: 'none', width: '100%' }}
            >
                <p>Add Subscription</p>
            </Link>
            <button
                onClick={handlelogout}
            >Logout</button>
        </div>
    )
}

export default Sidebar