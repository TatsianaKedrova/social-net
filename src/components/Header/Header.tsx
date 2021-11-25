import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import authUserPhoto from "../../assets/authUserPhoto.jpg";

export type HeaderPresentationalPropsType = {
  isAuth: boolean;
  login: string | null;
  setAuthUserData: (
    userId: number | null,
    email: string | null,
    login: string | null
  ) => void;
};

const Header: React.FC<HeaderPresentationalPropsType> = ({
  isAuth,
  login,
  setAuthUserData,
}) => {
  return (
    <header className={classes.header}>
      <span className={classes.socialNetStyle}>Baletro SocialNet</span>
      <img src={authUserPhoto} alt="headerImage" />
      <div className={classes.loginBlock}>
        {isAuth ? (
          login
        ) : (
          <NavLink
            to={"/login"}
            style={{ textDecoration: "none", color: "white" }}
          >
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
