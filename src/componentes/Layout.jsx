import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <nav className='navbar'>
            <NavLink to='/' className={({isActive}) => (isActive ? 'link active' : 'link')}> Home </NavLink>
            <NavLink to='/About' className={({isActive}) => (isActive ? 'link active' : 'link')}> AboutUs </NavLink>
            <NavLink to='/Productos' className={({isActive}) => (isActive ? 'link active' : 'link')}> Productos </NavLink>
            <NavLink to='/Api' className={({isActive}) => (isActive ? 'link active' : 'link')}> Api </NavLink>
            <NavLink to='/Formulario' className={({isActive}) => (isActive ? 'link active' : 'link')}> Formulario </NavLink>
            <Outlet />
        </nav>
    )
}

export default Layout


