import React from "react";
import DialogItem from "./DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message";


	
const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Tatiana'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Elena'},
        {id: 4, name: 'Vladimir'},
        {id: 5, name: 'Nadin'},
        {id: 6, name: 'Sasha'},
        {id: 7, name: 'Diana'}
    ];

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What is your goal for next 3 years?'},
        {id: 4, message: 'I plan to work as a FrontEnd developer remotely for US or Canada company.'},
        {id: 5, message: 'Good. How is your sweetheart'}
    ];

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
                <DialogItem name = {dialogsData[0].name} id = {dialogsData[0].id} />
                <DialogItem name = { dialogsData[1].name} id = {dialogsData[1].id}/>
                <DialogItem name = { dialogsData[2].name} id = {dialogsData[2].id}/>
                <DialogItem name = { dialogsData[3].name} id = {dialogsData[3].id}/>
                <DialogItem name = { dialogsData[4].name} id = {dialogsData[4].id}/>
                <DialogItem name = { dialogsData[5].name} id = {dialogsData[5].id}/>
                <DialogItem name = { dialogsData[6].name} id = {dialogsData[6].id}/>
                <DialogItem name = { dialogsData[7].name} id = {dialogsData[7].id}/>
			</div>
			<div className={classes.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
			</div>
		</div>
	);
};

export default Dialogs;
