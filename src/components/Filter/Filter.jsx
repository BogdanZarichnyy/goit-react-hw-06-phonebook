import { useDispatch } from "react-redux";
import { searchContacts } from '../../redux/slices/filterSlice';

import css from './Filter.module.css'

export const Filter = () => {

    const dispatch = useDispatch();

    const handleFindName = ({ target }) => {
        dispatch(searchContacts(target.value.toLowerCase()));
    }

    return (
        <div className={css.form} >
            <label className={css.label} htmlFor="find" >Find contacts by name</label>
            <input className={css.input} onChange={handleFindName} id="find" type="text" name="findName" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" placeholder="Enter name"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required />
        </div>
    )
}