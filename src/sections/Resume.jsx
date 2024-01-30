import React from 'react'
import Heading from '../components/Heading'
import Background from '../components/Background'

const Resume = () => {
  return (
    <section className='bg-[#f2ede6] pb-44 '>
        <Heading top={'Resume'} end={'History'}/>
        <Background section={'History'}/>
    </section>
  )
}

export default Resume
