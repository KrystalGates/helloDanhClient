import React from "react";
import { Card,Grid } from "semantic-ui-react";
import ContactEditModal from "./ContactEditModal";
import ContactDeleteModal from "./ContactDeleteModal";

const ContactCard = props => {
  return (
    <Card>
      <Card.Description>
        <Grid>
          <Grid.Column>
            <Card.Header>
              {props.contact.first_name} {props.contact.last_name}
            </Card.Header>
            <p>{props.contact.email}</p>
            <p>{props.contact.address}</p>
            <p>{props.contact.phone_number}</p>
          </Grid.Column>
          <Grid.Column>
            <ContactEditModal
              contactId={props.contactId}
              getContacts={props.getContacts}
            />
            <ContactDeleteModal
              contactId={props.contactId}
              getContacts={props.getContacts}
            />
          </Grid.Column>
        </Grid>
      </Card.Description>
    </Card>
  );
};
export default ContactCard;
