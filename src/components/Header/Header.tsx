import React from 'react';
import classes from './Header.module.css';
import { NavLink } from "react-router-dom";
import {InitialLoginType} from "../../redux/auth-reducer";

export type HeaderPresentationalPropsType = {
    userAuthData: InitialLoginType
}

const Header = (props: HeaderPresentationalPropsType) => {
    return (
            <header className={classes.header}>
				<img src="https://www.thoughtco.com/thmb/ftg5egcM2Yin5lr62SmraQYhazI=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/lightbulblit-57a5bf6b5f9b58974aee831e.jpg" 
                alt='headerImg'/>
                <div className={classes.loginBlock}>
                    <NavLink to={'/login'} style={{"textDecoration": "none", "color": "white"}}>Login</NavLink>
                </div>
			</header>
        
    )
}

export default Header
