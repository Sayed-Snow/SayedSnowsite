import { Github, Instagram, Linkedin } from 'lucide-react';
import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className='bg-cream pb-10 px-9 flex flex-row justify-between align-middle font-jost text-sm uppercase'>
      <div className=' w-fit flex'>
       <a className='w-fit mx-2' href='https://www.github.com/Sayed-Snow' target='_blank'> <Github className=' pointer-events-none' size={22}/></a>
       <a className='w-fit mx-2' href='https://www.linkedin.com/in/sayed-peters/' target='_blank'> <Linkedin className=' pointer-events-none' size={22}/></a>
       <a className='w-fit mx-2' href='https://www.instagram.com/sayed_snow/' target='_blank'> <Instagram className=' pointer-events-none' size={22}/></a>
      </div>
      <div className=' w-fit'>
        <p>© {currentYear} 
      <strong className=' text-emerald-500  '> Sayed</strong>
      . All rights reserved
       </p>
      </div>
      <div className=' w-fit'>
        <p>Developered By
      <strong className=' text-emerald-500  '> Sayed</strong>
       </p>
      </div>
    </section>
  )
}

export default Footer
