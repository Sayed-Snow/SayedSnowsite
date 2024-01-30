import React from 'react'
import Heading from '../components/Heading'
import Background from '../components/Background'
import ResumeContent from '../components/ResumeContent'
import { educationData, workData } from '../data'

const Resume = () => {
  return (
    <section className='bg-cream pb-44 ' id='resume'>
        <Heading top={'Resume'} end={'Education'} className=''/>
       <ResumeContent data={educationData}/>
       <Heading top={''} end={'Work History'} className=''/>
        <ResumeContent data={workData}/>
        <Background section={'History'}/>
    </section>
  )
}

export default Resume
