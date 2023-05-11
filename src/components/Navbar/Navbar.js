import React from 'react';
import logo from '../../images/logo.png';
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
  return (
    <header className="bg-sky-100 sticky top-0 z-50 border-b flex items-center justify-between px-2 shadow-lg">
      <div className="flex items-center md:mb-0 justify-between">
          <img className="w-36 h-18"src={logo} alt="Logo"/>    
      </div>
      <nav>
        <ul className="flex justify-center items-center">
          <li className="md:ml-4">
            <CustomLink to="/" className="no-underline text-dark font-bold md:border-none md:mx-5 md:p-0 md:text-lg hover:bg-violet-200 rounded-full p-2"> Home </CustomLink>
          </li>
          <li className="md:ml-4">
            <CustomLink to="/user/add" className="no-underline text-dark font-bold md:border-none md:mx-5 md:p-0 md:text-lg hover:bg-violet-200 rounded-full p-2"> Add User </CustomLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;