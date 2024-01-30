import React from 'react'
import Heading from '../components/Heading'
import Background from '../components/Background'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <section id='contact' className='bg-[#f2ede6] pb-44 '>
        <Heading top={'Contact me'} mid={"LET'S"} end={'Talk About Ideas'}/>
        <ContactForm/>
        <Background section={'Contact'}/>
    </section>
  )
}

export default Contact
