import React, { useState, useEffect } from "react";
import { Grid, Card, Header, Container } from "semantic-ui-react";
import MyInfoEditModal from "./MyInfoEditModal";

//Renders current user's info
const MyInfo = props => {
  const [myInfo, setMyInfo] = useState({ user: {} });

  //Handles getting current user and sets state upon useEffect
  const getMyInfo = () => {
    fetch("http://www.hellodanh.com/customusers/currentuser", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("helloDanh_token")}`
      }
    })
      .then(res => res.json())
      .then(setMyInfo);
  };

  useEffect(() => {
    getMyInfo();
  }, []);

  return (
    <>
      <Header as="h1" textAlign="center">
        My Info
      </Header>
      <Container>
        <Card.Group itemsPerRow={1} style={{ marginTop: "1em" }}>
          <Card>
            <Card.Content>
              <Grid container column={2}>
                <Grid.Row>
                  <Grid.Column width={14}>
                    <div>
                      <Card.Header
                        style={{ fontSize: "22px", fontWeight: 650 }}
                      >
                        {myInfo.user.first_name} {myInfo.user.last_name}
                      </Card.Header>
                      <Card.Description>
                        <div>{myInfo.user.email}</div>
                        <div>{myInfo.phone_number}</div>
                        <div>{myInfo.address}</div>
                      </Card.Description>
                    </div>
                  </Grid.Column>
                  <Grid.Column width={1}>
                    {/* My info Edit Modal. Open upon Edit button click*/}
                    <MyInfoEditModal
                      myInfoId={myInfo.id}
                      key={myInfo.id}
                      getMyInfo={getMyInfo}
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    </>
  );
};
export default MyInfo;
