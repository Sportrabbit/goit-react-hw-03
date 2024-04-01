import css from "./ContactList.module.css";
import Contact from "../contact/Contact";

export default function ContactList({ filteredContacts, deleteContac }) {
    return (
        <div className={css["container-contacts"]}>
            {filteredContacts.map(({ id, number, name }) => (
                <Contact
                key={id}
                name={name}
                id={id}
                number={number}
                deleteContact={deleteContac}
                />
            ))}
        </div>
    );
}