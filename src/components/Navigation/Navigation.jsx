import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const homeIsLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <nav>
        <NavLink to='/'>Home</NavLink>
        {homeIsLoggedIn && <NavLink to='/contacts'>Contacts</NavLink>}
      </nav>
    </div>
  );
};
export default Navigation;
