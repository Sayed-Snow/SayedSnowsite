import React from 'react'
import { pattern,background } from '../assets'
import { QuoteIcon } from 'lucide-react'

const TestimonialCard = ({text,pic,name,position}) => {
  return (
    <div className={`max-w-sm rounded-lg border border-gray-200 bg-white px-8 py-8 m-4 shadow-md min-h-[500px] min-w-[435px]  font-jost overflow-hidden relative `}>

    <div className="inline-block text-xs absolute font-bold text-gray-500 rounded-br-lg  z-10 px-4 py-3  bg-white uppercase"><QuoteIcon/></div>
    <img src={pic} className='  h-[240px]  w-[370px] absolute'/>
    {/* <div className='bg-green-200 h-[190px]  w-[320px] absolute '></div> */}
    
    <p className="text-gray-700 mt-64 min-h-[135px]">{text}</p>
    <div className='font-bold'>
        <h1 className='text-emerald-500'>{name}</h1>
        <p>{position}</p>
    </div>
      <img src={pattern} className=' absolute w-36 h-36 left-[360px] top-80  '/>
      
    </div>
  )
}

export default TestimonialCard
