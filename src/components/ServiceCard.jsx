import React, { useState } from 'react'
import { pattern } from '../assets'
import { ArrowBigRight, ArrowRight } from 'lucide-react'

const ServiceCard = ({title, catergory, text}) => {
    const [isHovered, setHover] = useState(false)
    const handleHoverOn = ()=>{
        setHover(true)
    }
    const handleHoverOff = ()=>{
        setHover(false)
    }
  return (
    <div className={`max-w-sm rounded-lg border border-gray-200 bg-white px-8 py-8 m-4 shadow-md font-jost overflow-hidden relative `}>
    <span className="inline-block text-xs font-bold text-gray-500 rounded-full px-2 py-1 mb-12 uppercase">{catergory}</span>
    <h5 className="text-2xl font-bold mb-2">{title}</h5>
    <p className="text-gray-700 min-h-[175px]">{text}</p>
      <img src={pattern} className=' absolute w-36 h-36 left-[190px] top-72  '/>
      <a className='flex font-bold' onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff}>See Pricing <span onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff}><ArrowRight className={`absolute text-emerald-500 ${isHovered? 'left-[120px]': ''} left-32 ease-in duration-200 h-6 `} /></span></a>
      
     
    </div>

  )
}

export default ServiceCard
