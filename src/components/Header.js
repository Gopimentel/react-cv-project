import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = () => (
    <div className="header-layout">
    <NavLink to="/" activeClassName="is-active" exact={true}>CV</NavLink> 
     <NavLink to="/workout-log" activeClassName="is-active" exact={true}>Workout Log</NavLink>   
     <NavLink to="/about" activeClassName="is-active" exact={true}>About</NavLink> 
    </div>);

export default Header;