import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import './ViewSubscriptions.css'
const ViewSubscriptions = () => {
    const [subs, setSubs] = useState([])
    const getsubs = () => {
        let token = localStorage.getItem('token')
        fetch('/getsubs', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.message == "Subscriptions fetched successfully") {
                    setSubs(data.subs)
                    console.log(data)
                }
                else {
                    alert("Something went wrong")
                }
            })
    }

    useEffect(() => {
        getsubs()
    }, [])
    return (
        <div className='fullbg'>

            <div className='left'>
                <Sidebar />
            </div>
            <div className='right'>
                <div className='substableout'>
                    <h1 className='head1'>Recent Subscriptions</h1>
                    <table className='substable'>
                        <thead>
                            <tr>
                                <th>User UID</th>
                                <th>Date</th>
                                <th>End Date</th>
                                <th>Type</th>
                                <th>Amount</th>
                            </tr>
                        </thead>

                        <tbody>
                            {subs
                            .sort((a, b) => {
                                return new Date(b.date.year, b.date.month, b.date.day) - new Date(a.date.year, a.date.month, a.date.day)
                            })
                            .map((sub, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{sub.userUID}</td>
                                        <td>{sub.date.day}-{sub.date.month + 1}-{sub.date.year}</td>
                                        {
                                            sub.subscriptionType == 'Yearly' ?
                                                <td>{sub.date.day}-{sub.date.month + 1}-{sub.date.year + 1}</td>
                                                :
                                                <td>{sub.date.day}-{sub.date.month + 2}-{sub.date.year + 0}</td>
                                        }
                                        <td>{sub.subscriptionType
                                        }</td>

                                        {
                                            sub.subscriptionType == 'Yearly' ?
                                                <td>1200</td>
                                                :
                                                <td>100</td>
                                        }
                                        {/* <td>{sub.amount}</td> */}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ViewSubscriptions