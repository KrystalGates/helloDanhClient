import React, { useEffect, useState} from "react"
import { Button, Modal, Form } from "semantic-ui-react"

const MyInfoEditModal = props => {
    const [myInfo, setMyInfo] = useState({user:{}});
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [address, setAddress] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [email, setEmail] = useState()


    const getMyInfo = () => {
      fetch("http://127.0.0.1:8000/customusers/currentuser", {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Token ${localStorage.getItem("helloDanh_token")}`
        }
      })
        .then(res => res.json())
        .then(myInfo => {
          console.log('console log my info',myInfo)
          setMyInfo(myInfo)
          setFirstName(myInfo.first_name)
          setLastName(myInfo.user.last_name)
          setAddress(myInfo.address)
          setPhoneNumber(myInfo.phone_number)
          setEmail(myInfo.user.email)
        });
    };

    const updateMyInfo = (e) => {
        e.preventDefault()
        const editMyInfo = {
            "first_name": firstName,
            "last_name": lastName,
            "address": address,
            "phone_number": +phoneNumber,
            "email": email
        }
        console.log('edit info', editMyInfo)
        fetch(`http://127.0.0.1:8000/customusers/${props.myInfoId}` ,{
          method: "PUT",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("helloDanh_token")}`
          },
          body: JSON.stringify(
            editMyInfo
          )
        })
        .then((myInfo) =>
            props.getMyInfo(myInfo)
        )
    }

    useEffect(getMyInfo, []);

    return (
        <Modal id="contact_edit_form"
              size="tiny"
              trigger={<Button>Edit</Button>}
            >
              <Modal.Header>Update My Info</Modal.Header>
              <Modal.Content>
                <Form onSubmit={(e)=>updateMyInfo(e)}>
                <Form.Input
                    onChange={e => setFirstName(e.target.value)}
                    id="firstName"
                    className="form-control"
                    icon="mail"
                    iconPosition="left"
                    label="First Name"
                    defaultValue={myInfo.user.first_name}
                  />
                  <Form.Input
                    onChange={e => setLastName(e.target.value)}
                    id="lastName"
                    className="form-control"
                    icon="mail"
                    iconPosition="left"
                    label="Last Name"
                    defaultValue={myInfo.user.last_name}
                  />
                  <Form.Input
                    onChange={e => setAddress(e.target.value)}
                    id="address"
                    className="form-control"
                    icon="mail"
                    iconPosition="left"
                    label="Address"
                    defaultValue={myInfo.address}
                  />
                  <Form.Input
                    onChange={e => setPhoneNumber(e.target.value)}
                    id="phoneNumber"
                    className="form-control"
                    icon="mail"
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
                  <Button content="Save" primary />
                </Form>
              </Modal.Content>
            </Modal>
    )
}

export default MyInfoEditModal