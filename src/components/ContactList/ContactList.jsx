import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { ContactListWrap } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);

  return (
    <ContactListWrap>
      {contacts.map(({ id, name, number }) => {
        return <ContactListItem key={id} name={name} number={number} id={id} />;
      })}
    </ContactListWrap>
  );
};
