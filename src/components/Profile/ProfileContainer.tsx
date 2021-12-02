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
  setErrorAC
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
  isError: boolean;
  errorMessage: string;
};
type MapDispatchPropsType = {
  setUserProfile: (profile: UserProfileType | null) => void;
  getUserProfileTC: (userId: number) => void;
  getUserProfileStatus: (userId: number) => void;
  changeProfileStatus: (status: string) => void;
  setErrorAC: (error: boolean) => void;
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
    console.log("statusLength: ", this.props.profileStatus.length);

    return (
      <div>
        <Profile {...this.props} />
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
    isError: state.profilePage.isError,
    errorMessage: state.profilePage.errorMessage,
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
    setErrorAC,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
