import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppRootType} from "../../redux/store-redux";
import {getUserProfileTC, setUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

//types
type PathParamsType = {
    userId: string
}
type MapStatePropsType = {
    userProfile: UserProfileType | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    setUserProfile: (profile: UserProfileType | null) => void
    getUserProfileTC: (userId: number) => void
}
export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType
type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

//class component ProfileContainer
class ProfileContainer extends React.Component<CommonPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = '2';
        }
        this.props.getUserProfileTC(+userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props} userProfile={this.props.userProfile} />
            </div>
        )
    }
}

//container component for ProfileComponent
let AuthRedirectComponent = (props: CommonPropsType) => {
    if(!props.isAuth) return <Redirect to={"/login"} />
    return <ProfileContainer{...props} />
}

let mapStateToProps = (state: AppRootType): MapStatePropsType => {
    return {
        userProfile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

let WithRouterDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {setUserProfile, getUserProfileTC})(WithRouterDataContainerComponent);