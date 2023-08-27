import { useContacts } from 'hooks/useContact';
import {
  ListItem,
  Text,
  Button,
  ButtonContainer,
} from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number }) => {
  const { removeContact } = useContacts();

  return (
    <ListItem>
      <Text>
        {name}: {number}
      </Text>
      <ButtonContainer>
        <Button type="button" onClick={removeContact}>
          Delete Contact
        </Button>
      </ButtonContainer>
    </ListItem>
  );
};
