
import classes from './Dialogs.module.css';
import React from 'react'
import { NavLink } from 'react-router-dom'

type DialogItemProps = {
    name: string
}

const DialogItem: React.FC<DialogItemProps> = (props) => {
    return (
    
        <div className={classes.dialog + " " + classes.active}>
			<NavLink to="/dialogs/1">{props.name}</NavLink>
		</div>
        
    )
}

export default DialogItem
