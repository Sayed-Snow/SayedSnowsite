import React from 'react'

const Background = ({section}) => {
  return (
    <div className=' overflow-x-clip'>
    <span className='flex bottom-0  justify-center text-[250px] font-caveat font-bold whitespace-nowrap pointer-events-none text-center opacity-5 leading-3'>{section}</span>
    </div>
  )
}

export default Background
