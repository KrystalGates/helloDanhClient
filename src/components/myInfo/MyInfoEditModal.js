import React, { useEffect, useState } from "react";
import { Button, Modal, Form } from "semantic-ui-react";

//Modal for current user to edit their information
const MyInfoEditModal = props => {
  const [myInfo, setMyInfo] = useState({ user: {} });
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [address, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [openMyInfoForm, setOpenMyInfoForm] = useState(false);

  //Handles open and close of modal
  const toggleEditMyInfo = () => {
    setOpenMyInfoForm(!openMyInfoForm);
  };

  //Handles getting current user info and sets state on useEffect
  const getMyInfoEditForm = () => {
    fetch("http://www.hellodanh.com/customusers/currentuser", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("helloDanh_token")}`
      }
    })
      .then(res => res.json())
      .then(myInfo => {
        setMyInfo(myInfo);
        setFirstName(myInfo.user.first_name);
        setLastName(myInfo.user.last_name);
        setAddress(myInfo.address);
        setPhoneNumber(myInfo.phone_number);
        setEmail(myInfo.user.email);
      });
  };

  //Handles updating current user info
  const updateMyInfo = e => {
    e.preventDefault();
    const editMyInfo = {
      first_name: firstName,
      last_name: lastName,
      address: address,
      phone_number: +phoneNumber,
      email: email
    };
    fetch(`http://www.hellodanh.com/customusers/${props.myInfoId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("helloDanh_token")}`
      },
      body: JSON.stringify(editMyInfo)
    }).then(myInfo => {
      props.getMyInfo(myInfo);
      getMyInfoEditForm();
      toggleEditMyInfo();
    });
  };

  useEffect(getMyInfoEditForm, []);

  return (
    <Modal
      id="contact_edit_form"
      size="tiny"
      trigger={
        <Button
          content="Edit"
          color="teal"
          style={{ marginTop: "70%", marginLeft: "2em" }}
          onClick={toggleEditMyInfo}
        />
      }
      open={openMyInfoForm}
    >
      <Modal.Header>Update My Info</Modal.Header>
      <Modal.Content>
        <Form onSubmit={e => updateMyInfo(e)}>
          <Form.Input
            onChange={e => setFirstName(e.target.value)}
            id="firstName"
            className="form-control"
            icon="user"
            iconPosition="left"
            label="First Name"
            defaultValue={myInfo.user.first_name}
          />
          <Form.Input
            onChange={e => setLastName(e.target.value)}
            id="lastName"
            className="form-control"
            icon="user"
            iconPosition="left"
            label="Last Name"
            defaultValue={myInfo.user.last_name}
          />
          <Form.Input
            onChange={e => setAddress(e.target.value)}
            id="address"
            className="form-control"
            icon="address book"
            iconPosition="left"
            label="Address"
            defaultValue={myInfo.address}
          />
          <Form.Input
            onChange={e => setPhoneNumber(e.target.value)}
            id="phoneNumber"
            className="form-control"
            icon="phone"
            iconPosition="left"
            label="Phone Number"
            defaultValue={myInfo.phone_number}
          />
          <Form.Input
            onChange={e => setEmail(e.target.value)}
            id="email"
            className="form-control"
            icon="mail"
            iconPosition="left"
            label="Email"
            defaultValue={myInfo.user.email}
          />
          <Button content="Save" color="teal" />
          <Button content="Cancel" onClick={toggleEditMyInfo} />
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default MyInfoEditModal;
