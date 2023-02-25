import React, { useState } from 'react'
import './Login.css'
const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        // TODO: handle login submission
        fetch('/signinadmin',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                }),
            }
        )
            .then(response => response.json())
            .then(data => {
                if(data.message == "Login Successful"){
                    alert("Login Successful")
                    localStorage.setItem('token', data.token)
                    window.location.href = '/dashboard'
                }
                else{
                    console.log(data)
                    alert("Login Failed")
                }
            })
            .catch(err => {
                console.log(err)
                alert("Login Failed")
            })
    }

    return (
        <div className='loginout'>
            <form onSubmit={handleSubmit} className='login'>
                <h1>Login</h1>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login