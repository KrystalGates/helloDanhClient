import React, { useState } from "react"
import { Button, Modal, Form } from 'semantic-ui-react'

const AddContact = props => {
    const [email,setEmail] = useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [address, setAddress] = useState()
    const [phoneNumber, setPhoneNumber] = useState()

    const handleNewContact = (e) => {
        e.preventDefault()
        const newContact = {
            "first_name": firstName,
            "last_name": lastName,
            "address": address,
            "phone_number": +phoneNumber,
            "email": email
        }
        fetch(`http://localhost:8000/contacts`, {
                method: "POST",
                headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("helloDanh_token")}`
                },
                "body": JSON.stringify(newContact
            )
            })
                .then(response => response.json())
                .then((response) => {
                  if("error" in response === true){
                    alert("Contact was not added. Please try again.")
                  } else{
                    props.history.push("/contacts")
                  }
                })
    }


    return (
        <Modal id="contact_form"
              size="tiny"
              trigger={<Button content='Add Contact'></Button>}
            >
              <Modal.Header>New Contact</Modal.Header>
              <Modal.Content>
                <Form onSubmit={handleNewContact}>
                  <Form.Input
                    onChange={e => setFirstName(e.target.value)}
                    id="firstName"
                    className="form-control"
                    icon="mail"
                    iconPosition="left"
                    label="First Name"
                    placeholder="First Name"
                  />
                  <Form.Input
                    onChange={e => setLastName(e.target.value)}
                    id="lastName"
                    className="form-control"
                    icon="mail"
                    iconPosition="left"
                    label="Last Name"
                    placeholder="Last Name"
                  />
                  <Form.Input
                    onChange={e => setAddress(e.target.value)}
                    id="address"
                    className="form-control"
                    icon="mail"
                    iconPosition="left"
                    label="Address"
                    placeholder="Address"
                  />
                  <Form.Input
                    onChange={e => setPhoneNumber(e.target.value)}
                    id="phoneNumber"
                    className="form-control"
                    icon="mail"
                    iconPosition="left"
                    label="Phone Number"
                    placeholder="Phone Number"
                  />
                  <Form.Input
                    onChange={e => setEmail(e.target.value)}
                    id="email"
                    className="form-control"
                    icon="mail"
                    iconPosition="left"
                    label="Email"
                    placeholder="Email"
                  />
                  <Button content="Add" primary />
                </Form>
              </Modal.Content>
            </Modal>
    )

}
export default AddContact