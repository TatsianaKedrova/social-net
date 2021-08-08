import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {InitialLoginType, setAuthUserData} from "../../redux/auth-reducer";
import {AppRootType} from "../../redux/store-redux";

export type HeaderAPIPropsType = {
    userAuthData: InitialLoginType
    setAuthUserData: (userId: number | null, email: string | null,login: string | null) => void
}

class HeaderAPIComponent extends React.Component<HeaderAPIPropsType> {


    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
            withCredentials: true
        })
            .then(res => {
                if(res.data.resultCode === 0) {
                    let { email, id, login } = res.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
                console.log(res.data);

            })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state: AppRootType) => {

    return {
        userAuthData: state.auth
    }
}

const HeaderContainer = connect(mapStateToProps,
    {
        setAuthUserData: setAuthUserData
    })(HeaderAPIComponent);


export default HeaderContainer;