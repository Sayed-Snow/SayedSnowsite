import { Code } from 'lucide-react'
import React from 'react'

const SkillCard = () => {
  return (
    <div className='flex flex-col items-center w-fit font-jost border-b border-black border-x p-6 m-6'>
        <Code size={50} className='mb-5'/>
        <h1 className='font-bold'>Coding</h1>
        <p>Some text to explain what this is</p>
    </div>
  )
}

export default SkillCard