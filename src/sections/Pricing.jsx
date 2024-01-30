import React from 'react'
import Heading from '../components/Heading'
import Background from '../components/Background'
import PriceCard from '../components/PriceCard'
import { pricingData } from '../data'
const Pricing = () => {
    const resumeText = "Tired of resumes that blend into the beige? Let's craft a one-page powerhouse that screams your name! Five curated sections highlighting your brilliance, and ongoing support to keep you shining. Ready to unleash your online presents? Buckle up, it's launch time! ✨"
  return (
    <section className='bg-[#f2ede6] pb-44 '>
        <Heading top={'Price'} end={'Price Board'}/>
        <div className='flex flex-wrap px-20 justify-center pb-10'>
        <PriceCard catergory={pricingData[0].category} title={pricingData[0].title} text={pricingData[0].text} packageList={pricingData[0].package}/>
        <PriceCard catergory={pricingData[1].category} title={pricingData[1].title} text={pricingData[1].text} packageList={pricingData[1].package} main={0}/>
        <PriceCard catergory={pricingData[2].category} title={pricingData[2].title} text={pricingData[2].text} packageList={pricingData[2].package}/>
        </div>
        <Background section={'Pricing'}/>     
    </section>
  )
}

export default Pricing
