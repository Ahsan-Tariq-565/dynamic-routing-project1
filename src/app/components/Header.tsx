import React from 'react';
import NavbarLi from "./NavbarLi"

const Header = () => {
    return (
        <div >
            <ul className='flex flex-row space-x-6 justify-center bg-teal-400 h-16 text=lg text-white'>
            <NavbarLi href="/" name="Home"/>
            <NavbarLi href="/country" name="Countries"/>
            </ul>
        </div>
    );
}

export default Header;