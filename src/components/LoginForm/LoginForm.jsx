import { ErrorMessage, Field, Formik, Form } from "formik";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { login } from "../../redux/auth/operations"; //
import { selectErrors } from "../../redux/auth/selectors"; //
import s from './LoginForm.module.css'
const LoginForm = () => {
  const dispatch = useDispatch();
  const errLogins = useSelector(selectErrors); //
  const handleLogin = (value) => {
    dispatch(login(value));
    if (errLogins) {
      //

      toast.error("Is Not Found", {
        duration: 4000,
        position: "top-center",

        style: {
          borderRadius: "10px",
          background: "red",
          color: "aliceblue",
        },
        icon: "🚩",
      });
    }
  };
  const orderSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .min(3, "Minimum 3 characters")
      .max(50, "Maximum 50 characters")
      .required("Must be filled"),
    password: Yup.string()
      .min(3, "Minimum 3 characters")
      .max(50, "Maximum 50 characters")
      .required("Email is required"),
  });
  return (
    <div className={s.log1}>
      <h2 className={s.log2}>Login</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={orderSchema}
        onSubmit={handleLogin}
      >
        <Form>
          <label>
            <div>
              <p className={s.log2}>Login</p>
              <ErrorMessage name="email" component="p" />
            </div>
            <Field name="email" placeholder="your email" />
          </label>
          <label>
            <div>
              <p className={s.log2}>Password</p>
              <ErrorMessage name="password" component="p" />
            </div>
            <Field name="password" placeholder="your password" />
          </label>
          <button className={s.logbtn} type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};
export default LoginForm;
