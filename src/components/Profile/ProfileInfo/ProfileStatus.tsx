import React from "react";
import classes from "./ProfileInfo.module.css";
import { FiEdit2 } from "react-icons/fi";
import { ChangeEvent, KeyboardEvent } from "react";
import { TextField } from "@material-ui/core";

type ProfileStatusType = {
  status: string;
  changeStatus: (status: string) => void;
};

class ProfileStatus extends React.Component<ProfileStatusType> {
  state = {
    editMode: false,
    inputText: this.props.status,
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
      inputText: this.props.status,
    });
  }

    onInputTextChange = (event: ChangeEvent<HTMLInputElement>) => (
      this.setState({
        inputText: event.target.value
    })
    )

    // onChangeStatus = () => {
    //   this.props.changeStatus(this.state.inputText)
    // }
       
  onKeyPressChangeStatus = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
    this.offEditMode();
    console.log("input text: ", this.state.inputText);
    this.props.changeStatus(this.state.inputText)
    }
  };
  render() {
    console.log("this.props.status: ", this.props.status);

    return (
      <>
        {!this.state.editMode ? (
          <div className={classes.profileStatus}>
            <div className={classes.statusStyle}>{this.props.status}</div>
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
              id="outlined-basic"
              variant="outlined"
              value={this.state.inputText}
              onChange={this.onInputTextChange}
              autoFocus
              onBlur={this.offEditMode.bind(this)}
              onKeyPress={this.onKeyPressChangeStatus}
            />
          </div>
        )}
      </>
    );
  }
}

export default ProfileStatus;
