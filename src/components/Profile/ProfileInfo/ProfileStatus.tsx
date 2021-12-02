import React from "react";
import classes from "./ProfileInfo.module.css";
import { FiEdit2 } from "react-icons/fi";
import { ChangeEvent, KeyboardEvent } from "react";
import { TextField } from "@material-ui/core";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { ProfilePropsType } from "../Profile";

type ProfileStatusType = Omit<ProfilePropsType, "userProfile">;

class ProfileStatus extends React.Component<ProfileStatusType> {
  state = {
    editMode: false,
    inputText: this.props.profileStatus,
  };

  onEditMode() {
    this.setState({
      editMode: true,
    });
  }
  offEditMode() {
    this.setState({
      editMode: false,
      inputText: this.props.profileStatus,
    });
  }

  onInputTextChange = (event: ChangeEvent<HTMLInputElement>) =>
    this.setState({
      inputText: event.target.value,
    });

  onKeyPressChangeStatus = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      this.offEditMode();
      this.props.changeProfileStatus(this.state.inputText);
    }
  };

  closeAlert = () => {
    this.props.setErrorAC(false);
  };

  render() {
    if (this.state.editMode) {
      return (
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
      );
    }

    return (
      <>
        <div className={classes.profileStatus}>
          <div className={classes.statusStyle}>{this.props.profileStatus}</div>
          <div
            className={classes.editor}
            onDoubleClick={this.onEditMode.bind(this)}
          >
            <FiEdit2 />
          </div>
        </div>
        {this.props.isError && (
          <Alert
            severity="error"
            className={classes.alertStyle}
            onClose={this.closeAlert}
          >
            <AlertTitle>Error</AlertTitle>
            {this.props.errorMessage}
          </Alert>
        )}
      </>
    );
  }
}

export default ProfileStatus;
