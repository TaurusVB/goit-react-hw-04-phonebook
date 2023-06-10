import React, { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { MainTitle, ContactsTitle, AppDiv } from './App.styled';

const LS_CONTACTS = 'contacts';
const contactsInLS = localStorage.getItem(LS_CONTACTS);
const parsedContacts = JSON.parse(contactsInLS);

export const App = () => {
  const [contacts, setContacts] = useState(parsedContacts ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setContacts(parsedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_CONTACTS, JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = evt => {
    setContacts(
      contacts.filter(contact => {
        return contact.name !== evt.currentTarget.name;
      })
    );
  };

  const addContact = data => {
    const normalizedName = data.name.toLowerCase();

    const isAlreadyInContacts = contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (isAlreadyInContacts) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    setContacts(prevContacts => [...prevContacts, data]);
  };

  const handleFilterChange = evt => {
    const { value } = evt.currentTarget;
    setFilter(value);
  };

  const normalizedFilter = filter.toLowerCase();

  const visiableContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <AppDiv>
      {' '}
      <MainTitle>PhoneBook</MainTitle>
      <ContactForm onSubmit={addContact} />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter filter={filter} onChange={handleFilterChange} />
      <Contacts contactsList={visiableContacts} onDelete={deleteContact} />
    </AppDiv>
  );
};
