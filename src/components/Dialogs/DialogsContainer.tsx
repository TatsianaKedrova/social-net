import {
    sendMessage,
    updateNewMessageBody,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppRootType} from "../../redux/store-redux";


let mapStateToProps = (state: AppRootType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const DialogsContainer = connect(mapStateToProps, { updateNewMessageBody, sendMessage })(Dialogs);
// export type DialogsContainerConnectType = ConnectedProps<typeof DialogsContainer>

export default DialogsContainer;
