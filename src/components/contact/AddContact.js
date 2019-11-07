import React, { useState } from "react";
import { Button, Modal, Form } from "semantic-ui-react";

//Renders Add Contact Modal
const AddContact = props => {
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [address, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [openForm, setOpenForm] = useState(false);

  //Handles modal open and close
  const toggle = () => {
    setOpenForm(!openForm);
  };

  //Handles action of adding New Contact
  const handleNewContact = e => {
    e.preventDefault();
    const newContact = {
      first_name: firstName,
      last_name: lastName,
      address: address,
      phone_number: +phoneNumber,
      email: email
    };
    fetch(`https://api.hellodanh.com/contacts`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("helloDanh_token")}`
      },
      body: JSON.stringify(newContact)
    })
      .then(response => response.json())
      .then(response => {
        props.getContacts();
        toggle();
      });
  };

  return (
    <Modal
      id="contact_form"
      size="tiny"
      trigger={
        <Button
          content="Add Contact"
          color="teal"
          style={{ align: "center" }}
          onClick={toggle}
        />
      }
      open={openForm}
    >
      <Modal.Header>New Contact</Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleNewContact}>
          <Form.Input
            onChange={e => setFirstName(e.target.value)}
            id="firstName"
            className="form-control"
            icon="user"
            iconPosition="left"
            label="First Name"
            placeholder="First Name"
            required
          />
          <Form.Input
            onChange={e => setLastName(e.target.value)}
            id="lastName"
            className="form-control"
            icon="user"
            iconPosition="left"
            label="Last Name"
            placeholder="Last Name"
            required
          />
          <Form.Input
            onChange={e => setAddress(e.target.value)}
            id="address"
            className="form-control"
            icon="address book"
            iconPosition="left"
            label="Address"
            placeholder="Address"
          />
          <Form.Input
            onChange={e => setPhoneNumber(e.target.value)}
            id="phoneNumber"
            className="form-control"
            icon="phone"
            iconPosition="left"
            label="Phone Number"
            placeholder="Phone Number"
            required
          />
          <Form.Input
            onChange={e => setEmail(e.target.value)}
            id="email"
            className="form-control"
            icon="mail"
            iconPosition="left"
            label="Email"
            placeholder="Email"
            required
          />
          <Button content="Add" color="teal" align="right" />
          <Button content="Cancel" onClick={toggle} />
        </Form>
      </Modal.Content>
    </Modal>
  );
};
export default AddContact;
