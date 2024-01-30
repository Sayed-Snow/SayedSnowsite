import React, { useState } from 'react'
import { motion } from 'framer-motion'
import useMousePosition from '../hooks/useMousePosition'

const Cursor = () => {
  const {mousePosition, hoveredLink} = useMousePosition();
  const zoom = hoveredLink ? 'w-20 h-20 border-2 border-black bg-transparent opacity-100': 'h-9 w-9'
  const onLink = hoveredLink ? 'current':'default'
  const position =  {
    default:{
      x: mousePosition.x -18,
      y: mousePosition.y -18
    },
    current:{
      x: mousePosition.x -40,
      y: mousePosition.y -40,
      
    }
  }

  return (
    <motion.div className={`bg-black pointer-events-none rounded-full ${zoom}  z-50 fixed top-0 left-0 opacity-25 duration-75 ` }
    variants={position}
    animate={onLink} 
    
     
    />
      
  )
}

export default Cursor
