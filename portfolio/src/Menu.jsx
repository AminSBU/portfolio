import React from 'react';
import './Menu.css'
import { Link } from 'react-router-dom';

const Menu = () =>
{
    return(<>
        <Link to="/">
        <button>Home</button>
        </Link>
    </>);
}
export default Menu;