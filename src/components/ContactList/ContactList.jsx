import css from './ContactList.module.css'
import { Contact } from "../Contact/Contact"
import {  useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';

export const ContactList = () => {
  const filter = useSelector(state => state.filters);
  const { items } = useSelector(state => state.contacts)

  const filtredContacts = items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase()))
  const dispatch = useDispatch();
  
  return (
    <ul className={css.contact_list}>
      {filtredContacts.map(item => <li key={item.id} className={css.contact_item}>
        <Contact name={item.name} number={item.phone} />
        <button onClick={() => dispatch(deleteContact(item.id))}>Delete</button>
      </li>)}
    </ul>
  )
}