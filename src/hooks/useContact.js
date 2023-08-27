import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, fetchContacts } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

export const useContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilter);

  const addNewContact = (name, number) => {
    dispatch(addContact(name, number));
  };

  const removeContact = id => {
    dispatch(deleteContact(id));
  };

  const fetchAllContacts = useCallback(() => {
    const contacts = dispatch(fetchContacts());

    return contacts;
  }, [dispatch]);

  //   console.log(contacts);
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  console.log(filterContacts);

  return {
    contacts,
    filterContacts,
    addNewContact,
    removeContact,
    fetchAllContacts,
  };
};
