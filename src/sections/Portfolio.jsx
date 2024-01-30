import React from 'react'
import Heading from '../components/Heading'
import Background from '../components/Background'
import PortfolioGrid from '../components/PortfolioGrid'

const Portfolio = () => {
  return (
    <section className='bg-cream pb-44 ' id='works'>
        <Heading top={'Recent Works'} end={'Cases'}/>
        <PortfolioGrid/>
        <Background section={'Works'}/>
    </section>
  )
}

export default Portfolio
