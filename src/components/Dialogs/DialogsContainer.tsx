import {
    sendMessage,
    updateNewMessageBody,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppRootType} from "../../redux/store-redux";


let mapStateToProps = (state: AppRootType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

/*let mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body));
        },
        sendMessage: () => {
            dispatch(sendMessageAC());
        },
    }
}*/

const DialogsContainer = connect(mapStateToProps,
    {
        updateNewMessageBody,
        sendMessage
    })(Dialogs);
// export type DialogsContainerConnectType = ConnectedProps<typeof DialogsContainer>

export default DialogsContainer;
