import { FaPhone } from "react-icons/fa";
import { MdOutlineMan } from "react-icons/md";
import css from './Contact.module.css';


export const Contact = ({ name, number }) => {  
  return (
    <div className={css.contact_wrapper}>
      <p className={css.contact_field}><MdOutlineMan className={ css.contact_icon} /> {name}</p>
      <p className={css.contact_field}> <FaPhone className={css.phone_icon} /> {number}</p>
   </div>
 )
};