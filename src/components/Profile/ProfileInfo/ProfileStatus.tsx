import React from "react";
import classes from "./ProfileInfo.module.css";
import { FiEdit2 } from 'react-icons/fi';

function ProfileStatus() {
  return (
    <div className={classes.profileStatus}>
      I am great!!!
      <div className={classes.editor}>
        <FiEdit2 />
      </div>
    </div>
  );
}

export default ProfileStatus;
