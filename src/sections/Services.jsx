import React from 'react'
import Heading from '../components/Heading'
import ServiceCardCarousel  from '../components/ServiceCardCarousel '
import Background from '../components/Background'

const Services = () => {
  return (
    <section className='bg-[#f2ede6] pb-44 '>
      <Heading top='WHAT I DO' end='Services'/>
      <ServiceCardCarousel />
      <Background section={'Services'}/>
    </section>
  )
}

export default Services
