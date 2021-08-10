import React from 'react';
import classes from './Header.module.css';
import { NavLink } from "react-router-dom";

export type HeaderPresentationalPropsType = {
    isAuth: boolean
    login: string | null
    setAuthUserData: (userId: number | null, email: string | null,login: string | null) => void
}

const Header = (props: HeaderPresentationalPropsType) => {
    return (
            <header className={classes.header}>
				<img src="https://tse4.mm.bing.net/th?id=OIP.7rPehxb_KNFdefacd412IwHaEo&pid=Api&P=0&w=261&h=164"
                alt='headerImage'/>
                <div className={classes.loginBlock}>
                    { props.isAuth ? props.login :
                    <NavLink to={'/login'} style={{"textDecoration": "none", "color": "white"}}>Login</NavLink>}
                </div>
			</header>
    )
}

export default Header;
