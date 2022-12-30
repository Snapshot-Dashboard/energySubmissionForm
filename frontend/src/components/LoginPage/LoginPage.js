import { useState } from 'react'
import './LoginPage.css'
import { toast } from 'react-toastify'


const LoginPage = ({ setLogin, ErrorMessage, setErrorMessage }) => {
    const [UserName, setUserName] = useState('')
    const [Password, setPassword] = useState('')

    const handleLogin = () => {
        console.log(UserName, Password)
        if (UserName === 'admin' && Password === 'oildata123') {
            setLogin(true)
            setErrorMessage(false)
            toast('Login Successful.')
        } else {
            setErrorMessage(true)
        }
        setUserName('')
        setPassword('')
    }

    const handleUserName = e => {
        setUserName(e.target.value)
        setErrorMessage(false)
    }

    const handlePassword = e => {
        setPassword(e.target.value)
        setErrorMessage(false)
    }

    return (
        <div className='LoginPage'>
            <h1>Login</h1>
            <h3>Username</h3>
            <input type="text" value={UserName} onChange={e => handleUserName(e)} />
            <h3>Password</h3>
            <input type="password" value={Password} onChange={e => handlePassword(e)} />
            <button className='DataInputButton' onClick={handleLogin}>Login</button>
            {ErrorMessage ? <div className='LoginCredentials'>Login credentials were incorrect, please try again.</div> : ''}
        </div>
    )
}

export default LoginPage