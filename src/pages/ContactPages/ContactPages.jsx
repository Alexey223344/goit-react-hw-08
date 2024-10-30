import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";

const ContactPages = () => {

  const dispatch = useDispatch();
  const contUserData = useSelector(selectContacts);
  useEffect(() => {
    if (contUserData.length === 0) {
      dispatch(fetchContacts());
    }
  }, [dispatch, contUserData]);

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
