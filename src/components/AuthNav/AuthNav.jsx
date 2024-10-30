import { NavLink } from "react-router-dom";
import s from './AuthNav.module.css'

const AuthNav = () => {
  return (
    <div className={s.auth}>
      <NavLink>Registration</NavLink>
      <NavLink>Login</NavLink>
    </div>
  );
};
export default AuthNav;
