import React from 'react'
import Heading from '../components/Heading'
import Background from '../components/Background'
import SkillCard from '../components/SkillCard'

const Skills = () => {
  return (
    <section className='bg-[#f2ede6] pb-44 '>
      <Heading top={'Professional Skills'} end={'Talents'}/>
      <SkillCard/>
      <Background section={'Skills'}/>
    </section>
  )
}

export default Skills
