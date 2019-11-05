import React, { useState, useEffect } from "react";
import { Grid, Card, Header } from "semantic-ui-react";
import MyInfoEditModal from "./MyInfoEditModal";

const MyInfo = props => {
  const [myInfo, setMyInfo] = useState({ user: {} });

  const getMyInfo = () => {
    fetch("http://127.0.0.1:8000/customusers/currentuser", {
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
      <Grid container  centered column={2}>
        <Card>
          <Grid.Row>
            <Grid.Column>
              <Card.Header style={{ fontSize: "22px", fontWeight: 650 }}>
                {myInfo.user.first_name} {myInfo.user.last_name}
              </Card.Header>
              <Card.Description>
                <div>{myInfo.user.email}</div>
                <div>{myInfo.phone_number}</div>
                <div>{myInfo.address}</div>
              </Card.Description>
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>
          </Grid.Row>
        </Card>
              <MyInfoEditModal
                myInfoId={myInfo.id}
                key={myInfo.id}
                getMyInfo={getMyInfo}
              />
      </Grid>
    </>
  );
};
export default MyInfo;
