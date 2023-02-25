import React, { useState } from 'react'
import './AddSubscription.css'
import axios from 'axios'
import Sidebar from './components/Sidebar'
const AddSubscription = () => {
    const [userUID, setUserUID] = useState('')
    const [subscriptionType, setSubscriptionType] = useState('Yearly')
    const addSubscription = () => {
        // console.log('Add Subscription')
        // console.log(userUID)

        if (userUID === '') {
            alert('Please enter user UID')
            return
        }
        const data = {
            userUID,
            subscriptionType
        }

        fetch('https://dark-gold-lovebird-cuff.cyclic.app/addSubscription', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.message === 'Subscription added successfully') {
                    alert('Subscription added successfully')
                } else {
                    alert('Something went wrong')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className='fullbg'>
            <div className='left'>
                <Sidebar />
            </div>
            <div className='right'>
                <div className='addsubout'>
                    <h1 className='head1'>Add Subscription</h1>
                    <div className='formcontainer'>
                        <label className='label'>User UID</label>
                        <input className='input' type='text' placeholder='Enter User UID'
                            value={userUID}
                            onChange={(e) => setUserUID(e.target.value)}
                        />
                        <label className='label'>Subscription Type</label>
                        <select
                            className='input1'
                            value={subscriptionType}
                            onChange={(e) => setSubscriptionType(e.target.value)}
                        >
                            <option value='Yearly'>Yearly</option>
                            <option value='Monthly'>Monthly</option>
                        </select>
                        <button className='button'
                            onClick={addSubscription}
                        >Add Subscription</button>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default AddSubscription