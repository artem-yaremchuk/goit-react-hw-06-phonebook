import React from "react";
import { getContacts } from "../redux/selectors";
import { useSelector } from "react-redux";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <div>
      <h1
        style={{
          fontWeight: 500,
          lineHeight: "1.5",
          textAlign: "center",
          letterSpacing: "0.02em",
          color: "#2E2F42",
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        Phonebook
      </h1>
      <ContactForm />

      <h2
        style={{
          fontWeight: 500,
          lineHeight: "1.5",
          textAlign: "center",
          letterSpacing: "0.02em",
          color: "#2E2F42",
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        Contacts
      </h2>
      <Filter />
      {contacts.length > 0 && <ContactList />}
    </div>
  );
};

export default App;
