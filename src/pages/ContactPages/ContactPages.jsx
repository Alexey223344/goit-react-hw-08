import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors";
import { useEffect, useRef } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";

const ContactPages = () => {

  const dispatch = useDispatch();
  const contUserData = useSelector(selectContacts);


  const isInitialRender = useRef(true);

  useEffect(() => {
    if (isInitialRender.current && contUserData.length === 0) {
      dispatch(fetchContacts());
      isInitialRender.current = false;
    }
  }, [dispatch, contUserData]);

  // useEffect(() => {
  //   if (contUserData.length === 0) {
  //     dispatch(fetchContacts());
  //   }
  // }, [dispatch, contUserData]);

  return (
    <div>
      <div>
        <ContactForm />
        <SearchBox />
      </div>
      <ContactList />
    </div>
  );
};
export default ContactPages;
