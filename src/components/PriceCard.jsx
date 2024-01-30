import React, { useState } from 'react'
import { pattern } from '../assets'
import {  Check } from 'lucide-react'

const PriceCard = ({catergory, title, text, packageList, main=1}) => {
    const visable = main == 1 ? 'hidden': ''
    const boarder = main == 1 ? 'border-gray-200': 'border-black'
  return (

    <div className={`max-w-sm  rounded-3xl w- border-[2px]  ${boarder}  bg-white px-9 py-8 m-4 shadow-md font-jost overflow-hidden relative `}>
    <span className="inline-block text-xs font-bold text-black rounded-full px-2 py-1 mb-12 uppercase">{catergory}</span>

    <h5 className="text-2xl font-bold mb-2"><span className=' text-emerald-600'>R</span>{title}</h5>
    <p className="text-gray-700 min-h-[175px]">{text}</p>
    <ul className={`list-none list-inside py-5`}>
        <li className='flex'><Check className='text-emerald-600 mr-2'/>  {packageList[0]} </li>
        <li className='flex'><Check className='text-emerald-600 mr-2'/> {packageList[1]} </li>
        <li className='flex'><Check className='text-emerald-600 mr-2'/>  {packageList[2]} </li>
        <li className='flex'><Check className='text-emerald-600 mr-2'/>   {packageList[3]} </li>
        <li className='flex'><Check className='text-emerald-600 mr-2'/>   {packageList[4]}</li>

    </ul>
      <img src={pattern} className=' absolute w-36 h-36 left-[272px] top-[29rem] pointer-events-none  '/>
    <button className=' uppercase z-10 relative bg-emerald-600 rounded-full border text-white font-bold border-black p-3 w-full hover:bg-emerald-500'>Start Project</button>      
    </div>

  )
}


export default PriceCard
