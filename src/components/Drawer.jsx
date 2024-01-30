import React, { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div >

        <HamburgerMenu isOpen={isOpen} handleClick={handleOpenClose}/>
      <div
        className={`fixed top-0 ease-out duration-500 ${isOpen ? 'right-0' : '-right-full'} w-1/3 h-screen bg-white shadow-xl overflow-y-auto`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Drawer Content</h2>
          <p>
            This is the content displayed inside the drawer. You can add any
            desired elements like links, buttons, forms, etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
