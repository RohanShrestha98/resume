import React, { useState } from 'react'
import description from "./description.json"

export default function Skills(props) {
    const [liked, setliked]=useState(false)
  const clickLike =()=>{
    if(liked===false){
      setliked(true)
    }
    else{
      setliked(false)
    }
    
  }
  return (
    <div>
      {description.skills .map((skills , i) => (
    <div className='twittedTweet'style={props.lightStyle ==="white"?props.contentlight:props.contentdark} >
        <div className='NamePictureDate'>
            <div className='NamePicture'>
                <div className='profilePicUser'>
                  <p>R</p>
                </div>
                <div>
                <p>Rohan Shrestha</p>
                <p style={{fontSize:"12px",fontWeight:"400"}}>{`${skills .time}`}</p>
                </div>
             </div>
             <p>{`${skills .date}`}</p>
        </div>
        <div className='tweetContent '>
        <p>{`${skills .desc}`}</p>
        <img src={`${skills.image}`} alt="" />
       </div>
       <hr />
       <div className='likeComment'>
        <div className='liked' onClick={clickLike}>
       <i style={props.lightStyle ==="white"?props.contentlight:props.contentdark}  class="fa-solid fa-thumbs-up"></i>
       <p style={props.lightStyle ==="white"?props.contentlight:props.contentdark} >{liked===true?"Liked":"Like"}</p>
       </div>
       <div className='liked'>
       <i class="fa-regular fa-comment-dots"></i>
       <p>Comment</p>
       </div>
       
       </div>
       <div>
        
      </div>
    </div>
    ))}
    </div>
  )
}
