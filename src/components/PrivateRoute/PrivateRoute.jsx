import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors"; //

export const PrivateRoute = ({ component: Component, redirectTo }) => {
  const loggedIn = useSelector(selectIsLoggedIn); //
  return loggedIn ? Component : <Navigate to={redirectTo} />;
};
