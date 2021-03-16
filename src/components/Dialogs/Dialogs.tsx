import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message";


	
const Dialogs = () => {
	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
                <DialogItem name = {"Tatiana"} id = {1} />
                <DialogItem name = {"Sveta"} id = {2}/>
                <DialogItem name = {"Elena"} id = {3}/>
                <DialogItem name = {"Vladimir"} id = {4}/>
                <DialogItem name = {"Nadin"} id = {5}/>
                <DialogItem name = {"Sasha"} id = {6}/>
                <DialogItem name = {"Diana"} id = {7}/>
                <DialogItem name = {"Sherif"} id = {8}/>
			</div>
			<div className={classes.messages}>
                <Message message={"Hello"}/>
                <Message message={"How are you?"}/>
                <Message message={"Great! My React Typescript job is waiting for me!"}/>
                <Message message={"Consistency and persistence are the keys for success"}/>
			</div>
		</div>
	);
};

export default Dialogs;
