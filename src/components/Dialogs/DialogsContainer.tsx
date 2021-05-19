import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect, ConnectedProps} from "react-redux";
import {AppDispatch, AppRootType} from "../../redux/redux-store";


let mapStateToProps = (state: AppRootType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyActionCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export type DialogsContainerConnectType = ConnectedProps<typeof DialogsContainer>


export default DialogsContainer;
