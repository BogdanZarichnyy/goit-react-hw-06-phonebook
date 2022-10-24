import { useSelector, useDispatch } from "react-redux";
import { contactsSelector, filterSelector } from '../../redux/selectors';
import { deleteContact } from '../../redux/slices/contactsSlice';

import css from './ContactList.module.css'

export const ContactList = () => {

    const contactsStore = useSelector(contactsSelector);
    const findName = useSelector(filterSelector);
    const dispatch = useDispatch();

    const handleDeleteName = (id) => {
        dispatch(deleteContact(id));
    }

    return (
        <ul className={css.list}>
            {!findName ?
                contactsStore.map(contact => (
                    <li key={contact.id}>{contact.name}: {contact.number}
                        <button className={css.btndel} onClick={() => handleDeleteName(contact.id)} type="button">delete</button>
                    </li>
                )) :
                contactsStore.filter(contact => (contact.name.toLowerCase().includes(findName)))
                    .map(contact => (
                    <li key={contact.id}>{contact.name}: {contact.number}
                        <button className={css.btndel} onClick={() => handleDeleteName(contact.id)} type="button">delete</button>
                    </li>
                ))
            }
        </ul>
    )
}