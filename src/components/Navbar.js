import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <div className="text-white font-bold text-lg">KUSOMA</div>
      <div className="flex space-x-4">
        <div className="text-white">EAR 409</div>
        <div className="text-white">EAR 410</div>
        <div className="text-white">EAR 411</div>
        <div className="text-white">EAR 412</div>
      </div>
    </nav>
  );
};

export default Navbar;
