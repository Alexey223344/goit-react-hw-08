import { useDispatch, useSelector } from "react-redux";
import { selectIsRefresh } from "./redux/auth/selectors";
import { useEffect } from "react";
import Loader from "./components/Loader/Loader";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import HomePages from "./pages/HomePages/HomePages";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import RegistrationPages from "./pages/RegistrationPages/RegistrationPages";
import LoginPages from "./pages/LoginPages/LoginPages";
import ContactPages from "./pages/ContactPages/ContactPages";
import NotFoundPages from "./pages/NotFoundPages/NotFoundPages";
import { Toaster } from "react-hot-toast";
import { refreshUser } from "./redux/auth/operations";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";

const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefresh);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefresh ? (
        <Loader />
      ) : (
        <Layout>
          <Routes>
            <Route index element={<HomePages />} />
            <Route
              path="register"
              element={<RestrictedRoute component={<RegistrationPages />} redirectTo="/contacts" />}
            />
            <Route
              path="login"
              element={<RestrictedRoute component={<LoginPages />} redirectTo="/contacts" />}
            />
            <Route
              path="/contacts"
              element={<PrivateRoute component={<ContactPages />} redirectTo="/login" />}
            />
            <Route path="*" element={<NotFoundPages />} />
          </Routes>
          <Toaster />
        </Layout>
      )}
    </>
  );
};
export default App;
