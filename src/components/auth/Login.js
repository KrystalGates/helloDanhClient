import React, { useState } from "react";
import {withRouter} from "react-router-dom"
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import useSimpleAuth from "../../hooks/ui/useSimpleAuth";
import Register from "./Register";

const Login = props => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { login } = useSimpleAuth();

  // Simplistic handler for login submit
  const handleLogin = e => {
    e.preventDefault();
    const credentials = {
      username: email,
      password: password
    };

    login(credentials, props.setIsLoggedIn)
    props.history.push("/")
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src="/logo.png" /> Log-in to your account
        </Header>
        <Form size="large" onSubmit={handleLogin}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              onChange={e => setEmail(e.target.value)}
              required
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={e => setPassword(e.target.value)}
              required
            />

            <Button color="teal" fluid size="large" >
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to helloDanh?
          <Register setIsLoggedIn={props.setIsLoggedIn} {...props} />
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default withRouter(Login);
