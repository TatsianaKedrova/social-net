import React from "react";
import axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppRootType} from "../../redux/store-redux";
import {setUserProfile, UserProfileType} from "../../redux/profile-reducer";
import { RouteComponentProps, withRouter } from "react-router-dom";

//types
type PathParamsType = {
    userId: string
}
type MapStatePropsType = {
    userProfile: UserProfileType | null
}
type MapDispatchPropsType = {
    setUserProfile: (profile: UserProfileType | null) => void
}
export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType
type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

//class component
class ProfileContainer extends React.Component<CommonPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = '10';
        }
        console.log(this.props);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                    console.log(response)
                    this.props.setUserProfile(response.data);
                }
            )
    }

    render() {
        return (
            <div>
                <Profile {...this.props} userProfile={this.props.userProfile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppRootType): MapStatePropsType => {
    return {
        userProfile: state.profilePage.profile

    }
}

let WithRouterDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithRouterDataContainerComponent);