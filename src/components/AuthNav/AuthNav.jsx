import { NavLink } from "react-router-dom";
import s from './AuthNav.module.css'

const AuthNav = () => {
  return (
    <div className={s.auth}>
      <NavLink className={s.link} to='/register'>Registration</NavLink>
      <NavLink className={s.link} to='/login'>Login</NavLink>
    </div>
  );
};
export default AuthNav;
