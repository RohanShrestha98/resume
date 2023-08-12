import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./style.css"

export default function Resume() {
    const [showdata,setshowdata]=useState()
    const navigate = useNavigate()
    useEffect(() => {
        fetch('http://localhost:8000/data')
          .then(response => response.json())
          .then(showdata => setshowdata(showdata.slice(-1)[0]))
      }, []);
    const nextpage = ()=>{
      navigate('/resume')
    }
  return (
    <>
    <div className='popupbox'>
      {showdata && <div className='name_cross'><h2>Respected, {showdata.username} Sir/Maam !</h2><abbr title='Cross'><i onClick={nextpage} class="fa-solid fa-xmark"></i></abbr></div> }
      <p>
      As a recent graduate with a strong passion for front-end web development, I am excited about the opportunity to apply for the open position of a front-end web developer at your company. <br /><br/>
      Although I am a fresher, I have completed several projects and have a solid understanding of front-end web development technologies such as HTML, CSS, JavaScript, and React. My 3 months of experience has also provided me with a strong understanding of web development best practices and an ability to stay up-to-date with the latest technologies and trends in the industry. <br/><br />
      I am a quick learner and eager to continue expanding my skills. I am confident that my strong foundation in front-end development and my ability to adapt to new technologies and challenges will allow me to make an immediate impact in the role of a front-end web developer.
    <br /><br />
    I would be grateful for the opportunity to be considered for this role and would welcome the chance to discuss my qualifications further. 

      </p>
      <p style={{textAlign:"center",marginTop:"20px",fontWeight:"600"}}>Thank you for your time and consideration.</p>
    </div>
    </>
  )
}
