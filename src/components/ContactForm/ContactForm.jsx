import { useSelector, useDispatch } from "react-redux";

import { contactsSelector } from 'redux/selectors';
import { addContact } from 'redux/slices/contactsSlice';

import css from './ContactForm.module.css'

export const ContactForm = () => {

    const contactsStore = useSelector(contactsSelector);
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

    return (
        <form className={css.form} onSubmit={handleAddName} >

            <label className={css.label} htmlFor="name" >Name</label>
            <input className={css.input} id="name" type="text" name="name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" placeholder="Enter name"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required />
            
            <label className={css.label} htmlFor="phone" >Number</label>
            <input className={css.input} id="phone" type="tel" name="number" pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" placeholder="000-00-00" required />

            <button className={css.button} type="submit">Add contact</button>

        </form>
    )
}