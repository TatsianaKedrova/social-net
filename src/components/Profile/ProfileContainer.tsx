import React from "react";
import axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppRootType} from "../../redux/store-redux";
import {setUserProfile, UserProfileType} from "../../redux/profile-reducer";

export type ProfileContainerPropsType = {

    userProfile: UserProfileType | null
    setUserProfile: (profile: UserProfileType | null) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {

        console.log(this.props);
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/2")
            .then(response => {
                    // debugger;
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

let mapStateToProps = (state: AppRootType) => {
    return {
        userProfile: state.profilePage.profile

    }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);