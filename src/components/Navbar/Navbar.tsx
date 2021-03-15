import React from "react";
import classes from './Navbar.module.css';


console.log(classes);
// let classes = {
// 	'nav': 'Navbar_nav__32ddO',
// 	'item': 'Navbar_item__g8Xsn'
// }

const Navbar = () => {
	return (
		<nav className={classes.nav}>
			<div className={`${classes.item} ${classes.active}`}>
				<a href="#/">Profile</a>
			</div>
			<div className={classes.item}>
				<a href="#/">Messages</a>
			</div>
			<div className={classes.item}>
				<a href="#/">News</a>
			</div>
			<div className={classes.item}>
				<a href="#/">Music</a>
			</div>
			<br />
			<div className="item">
				<a href="#/">Settings</a>
			</div>
		</nav>
	);
};

export default Navbar;

