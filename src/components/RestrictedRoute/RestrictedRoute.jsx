import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export const RestrictedRoute = ({ component: Component, redirectTo }) => {
  const restIsLoggedIn = useSelector(selectIsLoggedIn);
  return restIsLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
export default RestrictedRoute;
