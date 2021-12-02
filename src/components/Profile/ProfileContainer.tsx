import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { AppRootType } from "../../redux/store-redux";
import {
  getUserProfileTC,
  setUserProfile,
  UserProfileType,
  getUserProfileStatus,
  changeProfileStatus,
} from "../../redux/profile-reducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

//types
type PathParamsType = {
  userId: string;
};
type MapStatePropsType = {
  userProfile: UserProfileType | null;
  profileStatus: string;
};
type MapDispatchPropsType = {
  setUserProfile: (profile: UserProfileType | null) => void;
  getUserProfileTC: (userId: number) => void;
  getUserProfileStatus: (userId: number) => void;
  changeProfileStatus: (status: string) => void;
};
export type ProfileContainerPropsType = MapStatePropsType &
  MapDispatchPropsType;
export type CommonPropsType = RouteComponentProps<PathParamsType> &
  ProfileContainerPropsType;

//class component ProfileContainer
class ProfileContainer extends React.Component<CommonPropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = "17167";
    }
    this.props.getUserProfileTC(+userId);
    this.props.getUserProfileStatus(+userId);
  }

  render() {
      console.log("all props: ", this.props);
      
    return (
      <div>
        <Profile {...this.props} />
        {/* userProfile={this.props.userProfile} profileStatus={this.props.profileStatus} */}
      </div>
    );
  }
}

//container component for ProfileComponent
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state: AppRootType): MapStatePropsType => {
  return {
    userProfile: state.profilePage.profile,
    profileStatus: state.profilePage.profileStatus,
  };
};

// let WithRouterDataContainerComponent = withRouter(ProfileContainer);

// export default withAuthRedirect(withRouter(connect(mapStateToProps, {setUserProfile, getUserProfileTC})(ProfileContainer)));

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    setUserProfile,
    getUserProfileTC,
    getUserProfileStatus,
    changeProfileStatus,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
