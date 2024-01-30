import React, { useState } from 'react';

const HamburgerMenu = ({isOpen, handleClick}) => {


  return (
    <button onClick={handleClick} 
    className="flex flex-col justify-center items-center top-10 right-10 z-50 fixed">
      <a className={`bg-steel-500 bg-black block transition-all duration-300 ease-out 
                      h-0.5 w-6 rounded-sm ${isOpen ? 
                      'rotate-45 translate-y-1' : '-translate-y-0.5'
                      }`} >
      </a>
      <a className={`bg-steel-500 bg-black block transition-all duration-300 ease-out 
                      h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 
                      'opacity-0' : 'opacity-100'
                      }`} >
      </a>
      <a className={`bg-steel-500 bg-black block transition-all duration-300 ease-out 
                      h-0.5 w-6 rounded-sm ${isOpen ? 
                      '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                      }`} >
      </a>    
  
    </button>
  );
};

export default HamburgerMenu;