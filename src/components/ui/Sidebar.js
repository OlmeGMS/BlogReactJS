import React from 'react';
import { Link, NavLink, useNavigate} from 'react-router-dom';

export const Sidebar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        // TODO: por hacer
        console.log('logout');
        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="header__nav-wrap">
            <ul className="header__nav">
                <li>
                    <NavLink 
                        className={({ isActive }) => (isActive ? 'current' : '')}
                        to="/post"
                    >
                        Blog Posts
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className={({ isActive }) => (isActive ? 'current' : '')}
                        to="/users"
                    >
                        Usuarios
                    </NavLink>
                </li>
                <li onClick={ handleLogout } className="login d-flex pt-3">
                    Cerrar sesion
                </li>
            </ul> 
        </nav>
    )
}