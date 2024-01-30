import React, { useState } from 'react'
import { background, pattern } from '../assets'
import {  ArrowRight } from 'lucide-react'
const WorkCard = ({name, position, pic, text}) => {

    const [isHovered, setHover] = useState(false)
    const handleHoverOn = ()=>{
        setHover(true)
    }
    const handleHoverOff = ()=>{
        setHover(false)
    }

  return (
    <div className={`max-w-sm rounded-lg border border-gray-200 bg-white px-8 py-8 m-4 shadow-md font-jost overflow-hidden relative `}>
    
    <img className="inline-block text-xs font-bold text-gray-500 rounded-xl  pb-3  h-[240px]  w-[370px] " src={pic}/>
    <a className="inline-block text-xs font-bold text-emerald-500 rounded-full  uppercase ">{position}</a>
    <h5 className="text-2xl font-bold mb-2"><a>{name}</a></h5>
    <p className="text-gray-700 min-h-[175px]">{text}</p>
      <img src={pattern} className=' absolute w-36 h-36 left-[260px] top-[28rem]  '/>
      <a className='flex font-bold' onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff} href='#contact'>Contact Me 
      <span onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff}>
        <ArrowRight className={`absolute pointer-events-none text-emerald-500 ${isHovered? 'left-[120px]': ''} left-32 ease-in duration-200 h-6 `} />
        </span>
      </a>
    </div>
  )
}

export default WorkCard
