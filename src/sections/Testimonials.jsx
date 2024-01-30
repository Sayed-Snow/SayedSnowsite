import React from 'react'
import Heading from '../components/Heading'
import Background from '../components/Background'
import TestimonialCarousel from '../components/TestimonialCarousel'

const Testimonials = () => {
  return (
    <section className='bg-cream pb-44 ' id='testimonial'>
        <Heading top={'Testimonials'} end={'Connections'}/>
        <TestimonialCarousel />
        <Background section={'People'}/>
    </section>
  )
}

export default Testimonials
