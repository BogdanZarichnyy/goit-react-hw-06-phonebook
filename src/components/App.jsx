import { useSelector, useDispatch } from "react-redux";
import { contactsSelector, filterSelector } from '../redux/selectors';
import { addContact, deleteContact } from '../redux/slices/contactsSlice';
import { searchContacts } from '../redux/slices/filterSlice';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {

    const contactsStore = useSelector(contactsSelector);
    const findName = useSelector(filterSelector);
    const dispatch = useDispatch();

    const handleAddName = event => {
        event.preventDefault();

        const { value: name } = event.target.elements.name;
        const { value: number } = event.target.elements.number;

        if (contactsStore.map(contact => contact.name).includes(name)) {
            alert(`${name} is already in contacts`);
            return;
        }
        dispatch(addContact(name, number));
        event.target.reset();
    }

    const handleFindName = ({ target }) => {
        dispatch(searchContacts(target.value.toLowerCase()));
    }

    const handleDeleteName = (id) => {
        dispatch(deleteContact(id));
    }

    return (
        <div className="data">

            <h1>Phonebook</h1>

            <ContactForm addName={handleAddName} />

            <h2>Contacts</h2>

            <Filter findName={handleFindName} />

            <ContactList contacts={contactsStore} findName={findName} deleteName={handleDeleteName} />

        </div>
    )
}