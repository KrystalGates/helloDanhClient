import React from "react"
import { Button, Modal, Form } from "semantic-ui-react"

const ContactDeleteModal = props => {
    const deleteContact = () => {
            fetch(`http://127.0.0.1:8000/contacts/${props.contactId}`, {
              method: "DELETE",
              headers: {
                Authorization: `Token ${localStorage.getItem("helloDanh_token")}`
              }
            })
                .then((contacts) =>
                props.getContacts(contacts)
            )
          };

    return(
        <Modal id="contact_edit_form"
              size="tiny"
              trigger={<Button>Delete</Button>}
            >
              <Modal.Header>Are you sure you want to delete this contact?</Modal.Header>
              <Modal.Content>
                <Form onSubmit={()=>deleteContact()}>
                  <Button content="Yes" primary />
                </Form>
              </Modal.Content>
            </Modal>
    )

}

export default ContactDeleteModal