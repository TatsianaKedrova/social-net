import {DialogsPageType, sendMessage, updateNewMessageBody,} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppRootType} from "../../redux/store-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import React from "react";

export type DialogsPropsType = {
    dialogsPage: DialogsPageType
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

let mapStateToProps = (state: AppRootType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

/*const DialogsContainer = compose(withAuthRedirect, connect(mapStateToProps, { updateNewMessageBody, sendMessage }))(Dialogs)
export default DialogsContainer;*/

const DialogsContainer= compose<React.ComponentType>(
    connect(mapStateToProps, { updateNewMessageBody, sendMessage }),
    withAuthRedirect
)(Dialogs);

export default DialogsContainer;