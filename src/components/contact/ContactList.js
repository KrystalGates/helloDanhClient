import React, { useState, useEffect } from "react";
import { Container, Card, Header, Grid } from "semantic-ui-react";
import AddContact from "./AddContact";
import ContactCard from "./ContactCard";

const ContactList = props => {
  const [contacts, setContacts] = useState([]);

  const getContacts = () => {
    fetch("http://127.0.0.1:8000/contacts", {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("helloDanh_token")}`
      }
    })
      .then(res => res.json())
      .then(contacts=>setContacts(contacts));
  };

  useEffect(getContacts, []);

  return (
    <>
    <Header as="h1" textAlign='center'>Contacts</Header>
    <Grid centered column={1}>
      <AddContact getContacts={getContacts} {...props} />

    </Grid>
      <Container>
        <Card.Group itemsPerRow={1} style={{marginTop:'1em'}}>
          {
            contacts.map(contact =>
            <ContactCard
              contact={contact}
              {...props}
              key={contact.id} getContacts={getContacts} contactId={contact.id}
            />
          )}
        </Card.Group>
      </Container>
    </>
  );
};
export default ContactList;
