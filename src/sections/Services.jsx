import React from 'react'
import Heading from '../components/Heading'
import ServiceCardCarousel  from '../components/ServiceCardCarousel'
import Background from '../components/Background'

const Services = () => {
  return (
    <section className='bg-cream pb-44 ' id='services'>
      <Heading top='WHAT I DO' end='Services'/>
      <ServiceCardCarousel />
      <Background section={'Services'}/>
    </section>
  )
}

export default Services
