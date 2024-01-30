import React from 'react'
import { background, port1, port2 } from '../assets'
import { caseData } from '../data'
import WorkCard from './WorkCard'

const PortfolioGrid = () => {
  return (
    <div className='flex flex-row flex-wrap items-center justify-center " '>
        {caseData.map((item, index) =>(
            <div  key={index}>
            <WorkCard name={item.name} pic={item.picture} position={item.position} text={item.text}/> 
            </div>
        ))}

    </div>
  )
}

export default PortfolioGrid
