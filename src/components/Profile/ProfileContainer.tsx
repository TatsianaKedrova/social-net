import React from "react";
import Profile from "./Profile";
import {AppRootType} from "../../redux/store-redux";
import {getUserProfileTC, UserProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

//types
type PathParamsType = {
    userId: string
}
type MapStatePropsType = {
    userProfile: UserProfileType | null
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
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state: AppRootType): MapStatePropsType => {
    return {
        userProfile: state.profilePage.profile,
    }
}

// let WithRouterDataContainerComponent = withRouter(ProfileContainer);

export default compose(

    connect(mapStateToProps, {setUserProfile, getUserProfileTC}),
    withAuthRedirect,
    withRouter)(ProfileContainer)
// withAuthRedirect(connect(mapStateToProps, {setUserProfile, getUserProfileTC})(WithRouterDataContainerComponent));