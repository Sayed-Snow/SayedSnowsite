import React from 'react'
import { background, something } from '../assets'
import Background from '../components/Background'

const Hero = () => {
  return (
    <section className=' bg-[#f2ede6] pb-44'>
          <div className="bg-[#f2ede6]  px-6 py-12 text-center font-jost md:px-12 lg:text-left">
                <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div className="mt-12 lg:mt-0">
                            <p className=" text-black  text-lg font-bold">
                            YO, <span className=' text-emerald-500'>MY NAME IS</span> 
                            </p>
                            <h1 className="mt-1 mb-3 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl [text-shadow:_2px_2px_#000,-2px_2px_#000,2px_-2px_#000,-2px_-2px_#000,5px_5px_0px_rgba(0,0,0,.2)] text-emerald-500">
                                SAYED <span className="text-white [text-shadow:_2px_2px_#000,-2px_2px_#000,2px_-2px_#000,-2px_-2px_#000,5px_5px_0px_rgba(0,0,0,.2)]">PETERS</span>
                            </h1>
                            <p className=" text-black mb-5 text-lg font-bold">
                            I AM <span className=' font-caveat text-4xl'>Web Developer</span> 
                            </p>
                            <p className=" text-black mb-5 ">
                            From South Africa, Cape Town. I have rich experience in web design, also I am good at wordpress. I love to talk with you about our unique.
                            </p>
                            <a className="mb-2 inline-block rounded border-black border bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
                                 href="#!" role="button">RESUME</a>
                            <a className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-800 dark:hover:bg-opacity-60"
                                 href="#!" role="button">SKILLS</a>
                        </div>
                        <div className="mb-12 lg:mb-0 ">
                            <img src={something}
                                className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />
                        </div>

                    </div>

                </div>
               
            </div>
            <Background section={'Web Developer'}/>

    </section>
  )
}

export default Hero
