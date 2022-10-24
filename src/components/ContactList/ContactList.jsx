import PropTypes from 'prop-types';
import css from './ContactList.module.css'

export const ContactList = ({ contacts, findName, deleteName }) => {
    return (
        <ul className={css.list}>
            {findName === '' ?
                contacts.map(contact => (
                    <li key={contact.id}>{contact.name}: {contact.number}
                        <button className={css.btndel} onClick={() => deleteName(contact.id)} type="button">delete</button>
                    </li>
                )) :
                contacts.filter(contact => (contact.name.toLowerCase().includes(findName))).map(contact => (
                    <li key={contact.id}>{contact.name}: {contact.number}
                        <button className={css.btndel} onClick={() => deleteName(contact.id)} type="button">delete</button>
                    </li>
                ))
            }
        </ul>
    )
}

ContactList.protoTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
    })),
    filter: PropTypes.string,
    deleteName: PropTypes.func,
};