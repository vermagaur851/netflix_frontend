import { useRef, useState } from 'react'
import './register.scss'

export default function Register() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleStart = () =>{
        setEmail(emailRef.current.value)
    }
    const handleFinish = () =>{
        setPassword(passwordRef.current.value)
    }
  return (
    <div className='register'>
        <div className="top">
            <div className="wrapper">
                <img 
                    className='logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
                    alt="Netflix" 
                    />
                <button className='loginButton'>Sign In</button>
            </div>
        </div>
        <div className="container">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anwhere. Cancel anytme.</h2>
            <p>
                Ready to watch? Enter your email to create or restart your membership.
            </p>
            {
                !email ? (
                    <div className="Input">
                        <input type="email" placeholder='Email address' ref={emailRef} />
                        <button className="registerButton" onClick={handleStart}>{"Get Started >"}</button>
                    </div>
                ) :
                (
                    <form className="Input">
                        <input type="password" placeholder='password' ref={passwordRef} />
                        <button className="registerButton" onClick={handleFinish}>{"Sign In >"}</button>
                    </form>
                )
            }
        </div>
    </div>
  )
}
