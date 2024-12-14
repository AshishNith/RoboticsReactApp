import React from 'react';

const Navbar = () => { 
    return (
        <nav className=" flex justify-between px-10   py-5 text-lg relative">
            <div className="text-3xl">Robosoc</div>
            <div className="flex gap-5 items-center font-semibold ">
                <a href=""><h2 className='custom-underline relative cursor-pointer hover:text-custom-purple '>Home</h2></a>
                <a href=""><h2 className='custom-underline relative cursor-pointer hover:text-custom-purple '>About Us</h2></a>
                <a href=""><h2 className='custom-underline relative cursor-pointer hover:text-custom-purple '>Events</h2></a>
                <a href=""><h2 className='custom-underline relative cursor-pointer hover:text-custom-purple '>Projects</h2></a>
                <a href=""><h2 className='custom-underline relative cursor-pointer hover:text-custom-purple '>Members</h2></a>
                <h2 className='font-bold'><i className="relative cursor-pointer ri-menu-3-line text-purple-700  text-3xl"></i></h2>
            </div>
        </nav>
    );
};

export default Navbar