import React, { useContext } from 'react';
import { Link, NavLink, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../reducer/authContext';
import { types } from '../../types/inedex';

export const Sidebar = () => {

    const navigate = useNavigate();
    const { dispatch } = useContext( AuthContext);

    const handleLogout = () => {
        const action = {
            type: types.logout,
            logged: false
          }
        dispatch(action);
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