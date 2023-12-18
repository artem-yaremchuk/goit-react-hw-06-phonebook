import React from "react";
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "../../redux/selectors";
import ContactListItem from "../ContactListItem/ContactListItem";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const { filter } = useSelector(getFilter);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <ul className={css.contactsList}>
      {filteredContacts.map((el) => (
        <ContactListItem key={el.id} contact={el} />
      ))}
    </ul>
  );
};

export default ContactList;
