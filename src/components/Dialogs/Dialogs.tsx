import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem";
import classes from "./Dialogs.module.css";


	
const Dialogs = () => {
	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
                <DialogItem name = {"Tatiana"} />
                <DialogItem name = {"Sveta"} />
                <DialogItem name = {"Elena"} />
                <DialogItem name = {"Vladimir"} />
                <DialogItem name = {"Nadin"} />
                <DialogItem name = {"Sasha"} />
                <DialogItem name = {"Diana"} />
                <DialogItem name = {"Sherif"} />
                
				{/* <div className={classes.dialog}>
					<NavLink to="/dialogs/2">Sveta</NavLink>
				</div>
				<div className={classes.dialog}>
					<NavLink to="/dialogs/3">Elena</NavLink>
				</div>
				<div className={classes.dialog}>
					<NavLink to="/dialogs/4">Vladimir</NavLink>
				</div>
				<div className={classes.dialog}>
					<NavLink to="/dialogs/5">Nadin</NavLink>
				</div>
				<div className={classes.dialog}>
					<NavLink to="/dialogs/6">Sasha</NavLink>
				</div>
				<div className={classes.dialog}>
					<NavLink to="/dialogs/7">Diana</NavLink>
				</div>
				<div className={classes.dialog}>
					<NavLink to="/dialogs/8">Jenia</NavLink>
				</div> */}
			</div>
			<div className={classes.messages}>
				<div className={classes.message}>Hey</div>
				<div className={classes.message}>Hello dear</div>
				<div className={classes.message}>
					Consistency and persistence are the keys for success
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
