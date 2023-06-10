import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  ContactsList,
  ContactItem,
  ContactText,
  DeleteBtn,
  Message,
} from './Contacts.styled';

export const Contacts = ({ contactsList, onDelete }) => {
  return contactsList.length ? (
    <ContactsList>
      {contactsList.map(contact => {
        const keyContact = nanoid();
        return (
          <ContactItem key={keyContact}>
            <ContactText>
              {contact.name}: {contact.number}
            </ContactText>
            <DeleteBtn name={contact.name} onClick={onDelete}>
              delete
            </DeleteBtn>
          </ContactItem>
        );
      })}
    </ContactsList>
  ) : (
    <Message>{`Oops! No contacts :(`}</Message>
  );
};

Contacts.propTypes = {
  contactsList: PropTypes.array,
  onDelete: PropTypes.func,
};
