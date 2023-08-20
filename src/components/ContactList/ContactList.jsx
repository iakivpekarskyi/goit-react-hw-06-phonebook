import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { ContactListWrap } from './ContactList.styled';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  return (
    <ContactListWrap>
      {contacts.map(({ id, name, number }) => {
        return <ContactListItem key={id} name={name} number={number} id={id} />;
      })}
    </ContactListWrap>
  );
};
