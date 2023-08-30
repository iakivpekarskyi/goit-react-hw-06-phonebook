// import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  deleteContact,
  // fetchContacts
} from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
import { setFilter, clearFilter } from 'redux/filterSlice';

export const useContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const addNewContact = ({ name, number }) => {
    dispatch(addContact({ name, number }));
  };

  const removeContact = id => {
    dispatch(deleteContact(id));
  };

  //   const fetchAllContacts = useCallback(() => {
  //     dispatch(fetchContacts());
  //   }, [dispatch]);

  const showFilter = filterValue => {
    dispatch(setFilter(filterValue));
  };

  const clearContactFilter = () => {
    dispatch(clearFilter());
  };

  const filteredContacts = contacts.filter(
    contact =>
      contact && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return {
    contacts,
    filter,
    filteredContacts,
    showFilter,
    clearContactFilter,
    addNewContact,
    removeContact,
    //  fetchAllContacts,
  };
};
