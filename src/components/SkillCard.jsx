import { Code } from 'lucide-react'
import React from 'react'

const SkillCard = () => {
  return (
    <div className='flex flex-col items-center w-fit font-jost'>
        <Code/>
        <h1 className='font-bold'>Coding</h1>
        <p>Some text to explain what this is</p>
    </div>
  )
}

export default SkillCard