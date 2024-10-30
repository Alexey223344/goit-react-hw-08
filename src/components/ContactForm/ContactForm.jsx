import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addUserContacts } from '../../redux/contacts/operations';


const ContactForm = () => {
  const dispatch = useDispatch();

  const orderSchema = Yup.object({
    name: Yup.string()
      .min(3, 'min of 3 letters')
      .max(50, 'max 50 letters')
      .required('form is incomplete, fill in the form'),
    number: Yup.string()
      .matches(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number')
      .min(3, 'min 3 number')
      .max(50, 'max 50 number')
      .required('form is incomplete, fill in the form'),
  });

  const handleFormAdd = (values, options) => {
    dispatch(
      addUserContacts({
        name: values.name.trim().toLowerCase(),
        number: values.number,
      })
    );
    options.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={handleFormAdd}
        validationSchema={orderSchema}
      >
        <Form className={s.contacts}>
          <label>
            Name
            <Field className={s.label_name} name='name' />
            <ErrorMessage className={s.err_msg} name='name' component='p' />
          </label>
          <label>
            Number
            <Field className={s.label_name} name='number' />
            <ErrorMessage className={s.err_msg} name='number' component='p' />
          </label>
          <button className={s.btn} type='submit'>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;