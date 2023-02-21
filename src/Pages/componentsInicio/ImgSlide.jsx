import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const ImgSlide = ({img}) => {
    const [animation,setAnimation]=useState(false)
    useEffect(()=>{
        const timer=setTimeout(()=>{
            setAnimation(true)
        },100)
       
        return ()=>{
            clearInterval(timer)
        }
    },[])
    return (
    <img className={`transform duration-1000 delay-1000 ${animation?"translate-x-0":"translate-x-full"}`} 
        src={img}
    />
  )
}

export default ImgSlide