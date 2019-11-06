import React, { useState } from "react";
import { Button, Confirm } from "semantic-ui-react";

//Modal for Deleting a contact
const ContactDeleteModal = props => {
  const [openForm, setOpenForm] = useState(false);

  //Handles open and closing of Modal
  const toggle = () => {
    setOpenForm(!openForm);
  };

  //Handles action of Deleting contact
  const deleteContact = () => {
    fetch(`http://127.0.0.1:8000/contacts/${props.contactId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${localStorage.getItem("helloDanh_token")}`
      }
    }).then(contacts => props.getContacts(contacts));
  };

  return (
    <Confirm
      trigger={
        <Button
          content="Delete"
          color="teal"
          style={{ marginTop: "1em" }}
          onClick={toggle}
        />
      }
      open={openForm}
      onCancel={toggle}
      className="conf"
      style={{ textAlign: "center" }}
      onConfirm={() => deleteContact()}
      content="Are you sure you want to delete this contact?"
    />
  );
};

export default ContactDeleteModal;
