import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Navbar.module.css';


const Navbar = () => {
	return (
		<nav className={classes.nav}>
			<div className={classes.item}>
				<NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
			</div>
			<br />
			<div className={classes.item}>
				<NavLink to="/dialogs" activeClassName={classes.active} >Messages</NavLink>
			</div>
			<br />
			
			<div className={classes.item}>
				<NavLink to="/news" activeClassName={classes.active} >News</NavLink>
		
			</div>
			<br />
			<div className={classes.item}>
				<NavLink to="/music" activeClassName={classes.active} >Music</NavLink>
			</div>
			<br />
			<div className={classes.item}>
				<NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
			</div>
		</nav>
	);
};
//`${classes.item} ${classes.active}`
export default Navbar;

