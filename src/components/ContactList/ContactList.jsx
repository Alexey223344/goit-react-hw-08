import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { selectContacts, selectFilters, selectIsLoading } from "../../redux/contacts/selectors";

const ContactList = () => {
  const foundContacts = useSelector(selectFilters);
  const isLoader = useSelector(selectIsLoading);
  const usContacts = useSelector(selectContacts);

  return (
    <div>
      {usContacts.length > 0 ? (
        <ul className={s.list}>
          {isLoader && <Loader />}
          {foundContacts.map((user) => (
            <li className={s.item} key={user.id}>
              <Contact user={user} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Add contact please!</p>
      )}
    </div>
  );
};
export default ContactList;
