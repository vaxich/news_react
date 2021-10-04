import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import '../header/header.scss'

const Header = () => {
    return (
        <div className = "header-main">
            <div className = "header-left">Новостник</div>
            <ul className = "header-right">
                <li><NavLink activeClassName = {'my-active'} exact to="/">Главная</NavLink></li>
                <li><NavLink activeClassName = {'my-active'} exact to="/News">Новости</NavLink></li>
                <li><NavLink activeClassName = {'my-active'} exact to="/Contacts">Контакты</NavLink></li>
                
            </ul>
        </div>
        
    )
}

export default Header;