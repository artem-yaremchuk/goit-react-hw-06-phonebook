import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts")) || [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];

    return storedContacts;
  });

  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    const contactObj = {
      ...newContact,
      id: nanoid(),
    };
    setContacts((prevContacts) => [...prevContacts, contactObj]);
  };

  const filterContact = (filterValue) => {
    setFilter(filterValue);
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id),
    );
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

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
      <ContactForm contacts={contacts} addContact={addContact} />

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
      <Filter filterContact={filterContact} />
      {contacts.length > 0 && (
        <ContactList
          contacts={filteredContacts}
          deleteContact={deleteContact}
        />
      )}
    </div>
  );
};

export default App;
