import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import s from '../AuthNav/AuthNav.module.css'

const Navigation = () => {
  const homeIsLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <nav>
        <NavLink className={s.link} to='/'>Home</NavLink>
        {homeIsLoggedIn && <NavLink to='/contacts'>Contacts</NavLink>}
      </nav>
    </div>
  );
};
export default Navigation;
