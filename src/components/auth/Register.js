import React, { useState} from "react"
import { Button, Modal, Form } from "semantic-ui-react"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"

const Register = props => {
    const [email,setEmail] = useState()
    const [password, setPassword] = useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [address, setAddress] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [verifyPassword, setVerifyPassword] = useState()
    const { register } = useSimpleAuth()
    const handleRegister = (e) => {
        e.preventDefault()


        const newUser = {
            "first_name": firstName,
            "last_name": lastName,
            "address": address,
            "phone_number": +phoneNumber,
            "email": email,
            "password": password
        }
        register(newUser, props.setIsLoggedIn)
        // .then(() => {
        //     props.history.push({
        //         pathname: "/home"
        //     })
        // })
    }

    return (
        <Modal id="register_form"
              size="tiny"
              trigger={<a> Sign up</a>}
            >
              <Modal.Header>Register</Modal.Header>
              <Modal.Content>
                <Form onSubmit={handleRegister}>
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
                  <Form.Input
                    onChange={e => setPassword(e.target.value)}
                    id="password"
                    className="form-control"
                    icon="lock"
                    iconPosition="left"
                    label="Password"
                    type="password"
                  />
                  <Form.Input
                    onChange={e => setVerifyPassword(e.target.value)}
                    id="verifyPassword"
                    className="form-control"
                    icon="lock"
                    iconPosition="left"
                    label="Verify Password"
                    type="password"
                  />
                  <Button content="Register" primary />
                </Form>
              </Modal.Content>
            </Modal>
    )
}

export default Register