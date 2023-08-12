import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./style.css"

export default function LoginForm() {
    const [type,settype]=useState(false)
    const [username,setusername]=useState("")
    
    const showPassword=()=>{
        if(type==false){
            settype(true)
        }
        else{
            settype(false) 
        }
        
    }
    const navigate = useNavigate()
    const handlesubmit=(e)=>{
      e.preventDefault();
      const login={username};
      fetch("http://localhost:8000/data",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(login)
      }).then((res)=>{
        navigate('/popup')
      }).catch((err)=>{
        console.log(err.message)
      })
    }
  return (
    <div >
      <form className='loginform' onSubmit={handlesubmit}>
        <section className='allcircle'>
        <div className='circle circle1'></div>
        <div className='circle circle2'></div>
        <div className='circle circle3'></div>
        </section>
        <header>
        <img src="img/resumelogo.png" alt="" />
        <p>My Resume</p>
        </header>
        <section className='inputs' >
            <p>Username</p>
            <input type="text" required placeholder='Enter Username' value={username} onChange={e=>setusername(e.target.value)}/>
            <div className='password'>
            <p>Password</p>
            <h6 style={{cursor:"pointer"}} onClick={showPassword}>Show</h6>
            </div>
            <input type={type ? "text":"password"} required  placeholder="enter your password" />
            <div className='submit'>
            <button className='link' >Submit</button>
            </div>
        </section>
      </form>
    </div>
  )
}
