import React, { useState } from "react"
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import useSimpleAuth from "../../hooks/ui/useSimpleAuth";
import Register from "./Register";

const Login = props => {
    const [email,setEmail] = useState()
    const [password, setPassword] = useState()
    const { login } = useSimpleAuth()

    // Simplistic handler for login submit
    const handleLogin = (e) => {
        console.log("past login func")
        e.preventDefault()
        const credentials = {
            "username": email,
            "password": password
        }

        login(credentials)
            .then(() => {
                props.history.push({
                    pathname: "/"
                })
            })
    }

    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
                <Image src='/logo.png' /> Log-in to your account
            </Header>
            <Form size='large'>
                <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={e => setEmail(e.target.value)}/>
                <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    onChange={e => setPassword(e.target.value)}
                />

                <Button color='teal' fluid size='large' onClick={handleLogin}>
                    Login
                </Button>
                </Segment>
            </Form>
            <Message>
                New to us?
                <Register {...props}
              />
            </Message>
            </Grid.Column>
        </Grid>
)
    }

export default Login