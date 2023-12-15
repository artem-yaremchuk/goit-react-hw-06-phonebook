import { useState } from "react";
import css from "./ContactForm.module.css";

const ContactForm = ({ contacts, addContact }) => {
  const [data, setData] = useState({
    name: "",
    number: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (data.name.trim() === "" || data.number.trim() === "") {
      alert("Fill in the fields");
      return;
    }
    const sameNames = contacts.some(
      (contact) => contact.name.toLowerCase() === data.name.toLowerCase(),
    );
    if (sameNames) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    addContact(data);
    reset();
  };

  const reset = () => {
    setData({ name: "", number: "" });
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.formField}>
        <label htmlFor="exampleInputName" className={css.formLabel}>
          Name
        </label>
        <input
          type="text"
          name="name"
          className={css.formInput}
          id="exampleInputName"
          value={data.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={css.formField}>
        <label htmlFor="exampleInputNumber" className={css.formLabel}>
          Number
        </label>
        <input
          type="tel"
          name="number"
          className={css.formInput}
          id="exampleInputNumber"
          value={data.number}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className={css.formBtn}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
