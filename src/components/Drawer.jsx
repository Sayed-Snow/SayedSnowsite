import React, { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import { sectionsData } from '../data';

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div >

        <HamburgerMenu isOpen={isOpen} handleClick={handleOpenClose}/>
      <div
        className={`fixed z-40 top-0 ease-out duration-500 ${isOpen ? 'right-0' : '-right-full'} w-[512px] h-screen  bg-white shadow-xl overflow-y-auto font-jost font-bold uppercase`}
      >
        <div className=" absolute top-0 left-0 flex items-center w-full h-full text-[22px] z-50">
          <div className='pl-5'>
            <ul>

            {sectionsData.map((test,index) =>(
              <div key={index} className='p-3 hover:text-emerald-500 duration-500'><a href={`#${test}`}> {test}</a></div>

            )
            )}

            </ul>
          

          </div>

        </div>
      </div>
    </div>
  );
};

export default Drawer;
