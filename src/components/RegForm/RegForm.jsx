import { ErrorMessage, Field, Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations"; //
import s from "./RegForm.module.css";
const RegForm = () => {
  const dispatch = useDispatch();
  const orderSchema = Yup.object({
    name: Yup.string()
      .min(3, "Min 3 letters")
      .max(50, "Max 50 letters")
      .required("Your name is required!"),
    email: Yup.string()
      .email("Invalid email format")
      .min(3, "Mini 3 letters")
      .max(50, "Max 50 letters")
      .required("Your email is required!"),
    password: Yup.string()
      .min(3, "Min 3 characters")
      .max(50, "Max 50 characters")
      .required("Your password is required!"),
  });

  const handleRegstr = (value, options) => {
    dispatch(register(value));
    options.resetForm();
  };
  return (
    <div className={s.lot}>
      <h2 className={s.style}>Regestration</h2>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={orderSchema}
        onSubmit={handleRegstr}
      >
        <Form>
          <label>
            <div>
              <p className={s.style}>Name</p>
              <ErrorMessage name="name" components="p" />
            </div>
            <Field name="name" placeholder="enter name" />
          </label>
          <label>
            <div>
              <p className={s.style}>Email</p>
              <ErrorMessage name="email" components="p" />
            </div>
            <Field name="email" placeholder="enter email" />
          </label>
          <label>
            <div>
              <p className={s.style}>Password</p>
              <ErrorMessage name="password" components="p" />
            </div>
            <Field name="password" placeholder="enter password" />
          </label>
          <button className={s.bot} type="submit">
            Register
          </button>
        </Form>
      </Formik>
      <div>
        <p className={s.style}>To gain access, register</p>
      </div>
    </div>
  );
};
export default RegForm;
