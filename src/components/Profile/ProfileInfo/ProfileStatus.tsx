import React from "react";
import classes from "./ProfileInfo.module.css";
import { FiEdit2 } from "react-icons/fi";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { TextField } from "@material-ui/core";

type ProfileStatusType = {
  status: string;
};

class ProfileStatus extends React.Component<ProfileStatusType> {
  state = {
    editMode: false,
    inputText: this.props.status
  };

  onEditMode() {
      console.log(this.state.editMode);
    this.setState({
      editMode: true,
    });
    console.log(this.state.editMode);
  }
  offEditMode() {
    this.setState({
        editMode: false,
        inputText: this.props.status
      });
  };

//   onInputTextChange = () => {
//       this.setState({
//           inputText: 
//       })
//   }

  onKeyPressAddStatus = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      this.setState({
        editMode: false,
      });
      //  changeStatus(status);
    }
  };
  render() {
console.log("this.props.status: ", this.props.status);

    return (
      <>
        {!this.state.editMode ? (
          <div className={classes.profileStatus}>
            {this.props.status}
            <div
              className={classes.editor}
              onDoubleClick={this.onEditMode.bind(this)}
            >
              <FiEdit2 />
            </div>
          </div>
        ) : (
          <div>
            <TextField
              color={"primary"}
              variant={"standard"}
              value={this.state.inputText}
            //   onChange={}
              autoFocus
              onBlur={this.offEditMode.bind(this)}
              onKeyPress={this.onKeyPressAddStatus}
            />
          </div>
        )}
      </>
    );
  }
}

export default ProfileStatus;
