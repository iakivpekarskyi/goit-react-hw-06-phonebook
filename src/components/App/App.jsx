import { Layout } from './App.styled';
import { GlobalStyles } from 'components/GlobalStyle';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact, deleteContact } from 'redux/contactsSlice';

export const App = () => {
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleAddContact = ({ name, number }) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts list`);
      return;
    }
    dispatch(addContact({ name, number }));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <Layout>
      <ErrorBoundary fallback="Sorry something went wrong ">
        <GlobalStyles />
        <h1>Phone book</h1>
        <ContactForm onAddContact={handleAddContact} />
        <h2>Contacts</h2>
        {contacts && contacts.length !== 0 && <Filter />}
        <ContactList deleteContact={handleDeleteContact} />
      </ErrorBoundary>
    </Layout>
  );
};
