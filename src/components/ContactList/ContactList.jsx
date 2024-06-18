import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/filterSlice";
import { selectContacts } from "../../redux/contactSlice";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectFilter);
  const yourContacts = contacts.filter((contact) => {
    if ("id" in contact && "name" in contact && "number" in contact) {
      if (
        typeof contact.id === "string" &&
        typeof contact.name === "string" &&
        typeof contact.number === "string"
      ) {
        return contact.name.toLowerCase().includes(filters.toLowerCase());
      }
    }
    return false;
  });
  return (
    <ul className={css.list}>
      {yourContacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
}
