import { ErrorMessage, Field, Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { updateUserContacts } from "../../redux/contacts/operations";

export const RedactionContactModl = ({ closeModal, user }) => {
  const dispatch = useDispatch();
  const orderSchema = Yup.object({
    name: Yup.string()
      .min(3, "Min 3 latters")
      .max(50, "Max 50 latters")
      .required("Fill this out is important!"),
    number: Yup.string()
      .matches(/^\+?[1-9]\d{1,14}$/, "Invalid phone number")
      .min(3, "Min 3 latters")
      .max(50, "Max 50 latters")
      .required("Fill this out is important!"),
  });
  const handleFormsAdd = (values) => {
    dispatch(updateUserContacts({ id: user.id, ...values }));
    closeModal();
  };
  return (
    <div>
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={handleFormsAdd}
        validationSchema={orderSchema}
      >
        <Form>
          <button type="button" onClick={closeModal}>
            X
          </button>
          <h3>Edit a contact</h3>
          <label>
            <div>
              <p>Name</p>
              <ErrorMessage name="name" components="p" />
            </div>
          </label>
          <Field name="name" />
          <label>
            <div>
              <p>Number</p>
              <ErrorMessage name="number" components="p" />
            </div>
          </label>
          <button type="submit">Edit!</button>
        </Form>
      </Formik>
    </div>
  );
};
export default RedactionContactModl;
