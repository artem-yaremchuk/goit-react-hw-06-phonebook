import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./ContactListItem.module.css";

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <li className={css.contactsListItem}>
      <div className={css.contactsWrap}>
        <p>{contact.name}:</p>
        <p>{contact.number}</p>
      </div>
      <button type="button" className={css.deleteBtn} onClick={() => handleDelete()}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
