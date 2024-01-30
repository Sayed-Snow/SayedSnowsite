import React from 'react'

const Heading = ({top, end, mid='MY'}) => {
  return (
    <div className='flex flex-col items-center pt-3 font-jost'>
      <h1 className='mt-1 font-bold tracking-tight md:text-[40px] uppercase'>{top}</h1>
      <p className='text-emerald-500'>{mid} 
        <span className=' font-caveat font-bold  text-black text-3xl'> {end}</span>
      </p>
    </div>
  )
}

export default Heading
