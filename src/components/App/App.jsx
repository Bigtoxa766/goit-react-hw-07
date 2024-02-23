
import css from './App.module.css';
// import { SearchBar } from '../SearchBar/SearchBar';
// import { ContactList } from '../ContactList/ContactList';
// import { ContactForm } from '../ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from '../../redux/operations';


function App() {  
  const dispatch = useDispatch();
  const {items, loading, error} = useSelector(state => state.contacts)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <div className={css.form_container}>
      {loading && <p>LOADING...</p>}
      {error && <p>ERROR</p>}
      {items.length > 0 && (
        <ul>
          {items.map(item => <li key={item.id}>
            <p>{item.name}</p>
            <p>{item.phone}</p>
            <button onClick={()=>dispatch(deleteContact(item.id))}>Delete</button>
          </li>)}
        </ul>
      )}
    </div>

    // <>
    //   <div className={css.form_container}>
    //     <h1>Phonebook</h1>
    //     <ContactForm />
    //     <SearchBar />
    //   </div>
      
    //   <ContactList />
    // </>
)
}

export default App
