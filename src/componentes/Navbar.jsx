import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/about'>about</Link>
            <Link to='/productos'>productos</Link>
            <Link to='/Api'>Api</Link>
            <Link to='/Formulario'>Formulario</Link>
        </div>
    )
}

export default Navbar