import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthTC, setAuthUserData} from "../../redux/auth-reducer";
import {AppRootType} from "../../redux/store-redux";

export type HeaderAPIPropsType = {
    isAuth: boolean
    login: string | null
    setAuthUserData: (userId: number | null, email: string | null,login: string | null) => void
    setAuthTC: () => void
}

class HeaderAPIComponent extends React.Component<HeaderAPIPropsType> {


    componentDidMount() {
        this.props.setAuthTC();
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state: AppRootType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

const HeaderContainer = connect(mapStateToProps,
    {
        setAuthUserData, setAuthTC
    })(HeaderAPIComponent);


export default HeaderContainer;