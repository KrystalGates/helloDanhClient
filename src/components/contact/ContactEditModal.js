import React, { useEffect, useState} from "react"
import { Button, Modal, Form } from "semantic-ui-react"

const ContactEditModal = props => {
    const [editSingleContact, setContact] = useState([])
    const [firstName, setFirstName] = useState()

    const [lastName, setLastName] = useState()
    const [address, setAddress] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [email, setEmail] = useState()

    const getContact = () => {
        fetch(`http://127.0.0.1:8000/contacts/${props.contactId}`, {
          method: "GET",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("helloDanh_token")}`
          }
        })
          .then(res => res.json())
          .then((singleContact) => {
                setContact(singleContact)
                setFirstName(singleContact.first_name)
                setLastName(singleContact.last_name)
                setAddress(singleContact.address)
                setEmail(singleContact.email)
                setPhoneNumber(singleContact.phone_number)
          }
        )
      };

    const updateContact = (e,contactId) => {
        e.preventDefault()
        const editContact = {
            "first_name": firstName,
            "last_name": lastName,
            "address": address,
            "phone_number": +phoneNumber,
            "email": email
        }
        console.log("edit contact",editContact)
        fetch(`http://127.0.0.1:8000/contacts/${contactId}` ,{
          method: "PUT",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("helloDanh_token")}`
          },
          body: JSON.stringify(
            editContact
          )
        })
        .then((contacts) =>
            props.getContacts(contacts)
        )
        .then((contact)=> getContact(props.contactId))
    }

    useEffect(getContact, []);
    return (
        <Modal id="contact_edit_form"
              size="tiny"
              trigger={<Button>Edit</Button>}
            >
              <Modal.Header>Update Contact</Modal.Header>
              <Modal.Content>
                <Form onSubmit={(e)=>updateContact(e,props.contactId)}>
                <Form.Input
                    onChange={e => setFirstName(e.target.value)}
                    id="firstName"
                    className="form-control"
                    icon="mail"
                    iconPosition="left"
                    label="First Name"
                    defaultValue={editSingleContact.first_name}
                  />
                  <Form.Input
                    onChange={e => setLastName(e.target.value)}
                    id="lastName"
                    className="form-control"
                    icon="mail"
                    iconPosition="left"
                    label="Last Name"
                    defaultValue={editSingleContact.last_name}
                  />
                  <Form.Input
                    onChange={e => setAddress(e.target.value)}
                    id="address"
                    className="form-control"
                    icon="mail"
                    iconPosition="left"
                    label="Address"
                    defaultValue={editSingleContact.address}
                  />
                  <Form.Input
                    onChange={e => setPhoneNumber(e.target.value)}
                    id="phoneNumber"
                    className="form-control"
                    icon="mail"
                    iconPosition="left"
                    label="Phone Number"
                    defaultValue={editSingleContact.phone_number}
                  />
                  <Form.Input
                    onChange={e => setEmail(e.target.value)}
                    id="email"
                    className="form-control"
                    icon="mail"
                    iconPosition="left"
                    label="Email"
                    defaultValue={editSingleContact.email}
                  />
                  <Button content="Save" primary />
                </Form>
              </Modal.Content>
            </Modal>
    )
}

export default ContactEditModal