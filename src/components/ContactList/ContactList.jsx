import css from './ContactList.module.css'
import { Contact } from "../Contact/Contact"
import {  useSelector } from 'react-redux';
import {getContacts} from '../../redux/selector'
// import { deleteContact } from '../../redux/contactSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(state => state.filters);

  const filtredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(filter.toLowerCase()))
  // const dispatch = useDispatch();
  
  return (
    <ul className={css.contact_list}>
      {filtredContacts.map((item) => {
        // const handleDelete = () => dispatch(deleteContact(item.id));
        return (<li className={css.contact_item} key={item.id}>
          <Contact name={item.name} number={item.number} />
          
        </li>)
      })}
    </ul>
  )
};