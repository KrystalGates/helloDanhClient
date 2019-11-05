import React from "react";
import { Card, Grid } from "semantic-ui-react";
import ContactEditModal from "./ContactEditModal";
import ContactDeleteModal from "./ContactDeleteModal";

//Renders Users contants with full name, email, address, and phone number.
//User can edit and delete contacts

const ContactCard = props => {
  return (
    <Card>
      <Card.Content>
        <Grid container columns={2}>
          <Grid.Row>
            <Grid.Column>
              <div style={{ marginLeft: "2em" }}>
                <Card.Header style={{ fontSize: "22px", fontWeight: 650 }}>
                  {props.contact.first_name} {props.contact.last_name}
                </Card.Header>
                <Card.Description>
                  <div>{props.contact.email}</div>
                  <div>{props.contact.address}</div>
                  <div>{props.contact.phone_number}</div>
                </Card.Description>
              </div>
            </Grid.Column>
            <Grid.Column>
              <Grid container columns={1}>
                <Grid.Column style={{ marginRight: ".5em" }}>
                  <Grid.Row verticalAlign="right">
                    {/* Contact Edit Modal. Open Modal upon Edit button click */}
                    <ContactEditModal
                      contactId={props.contactId}
                      getContacts={props.getContacts}
                    />
                  </Grid.Row>
                  <Grid.Row verticalAlign="right">
                    {/* Contact delete modal. Open Modal upon Delete button click */}
                    <ContactDeleteModal
                      contactId={props.contactId}
                      getContacts={props.getContacts}
                    />
                  </Grid.Row>
                </Grid.Column>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
    </Card>
  );
};
export default ContactCard;
