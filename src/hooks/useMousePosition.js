import React, { useEffect, useState } from 'react'

function useMousePosition() {

    const [mousePosition, setMousePosition] = useState({x:0 ,y:0})
    const [hoveredLink, setHoveredLink] = useState(null); // Add state for hovered link

    const updateMousePosition = (e) =>{
        setMousePosition({x: e.clientX, y: e.clientY})
        const target = e.target;

        if (target.tagName === 'BUTTON' || target.tagName === 'A') {
          setHoveredLink(target); // Update hovered link state
        } else {
          setHoveredLink(null); // Clear hovered link if mouse not on a link
        }
      
    };

    useEffect( () => {
        window.addEventListener('mousemove', updateMousePosition)
        return () =>{
            window.removeEventListener('mousemove', updateMousePosition)
        }
    },[])


    return {mousePosition,hoveredLink}

}

export default useMousePosition





