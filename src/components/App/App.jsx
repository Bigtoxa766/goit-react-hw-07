
import css from './App.module.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/operations';


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
      <ContactForm />
       <SearchBar />
      {items.length > 0 && <ContactList />}
    </div>
)
}

export default App
