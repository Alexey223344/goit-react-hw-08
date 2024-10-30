import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import s from './HomePages.module.css'

const HomePages = () => {
  const login = useSelector(selectIsLoggedIn);
  return (
    <div className={s.divx}>
      <h1>Welcome your Phonebook!</h1>
      <p>Easy ability to add, delete, edit your contacts.</p>
      {login ? (
        <p>
          contact management go to <NavLink to="/contacts">Contacts</NavLink>Look at the contacts
        </p>
      ) : (
        <p>
          Get Started <NavLink  className={s.phome} to="/register">Register</NavLink>or<NavLink to="/login"></NavLink> to access
          the phone book.
        </p>
      )}
    </div>
  );
};
export default HomePages;
