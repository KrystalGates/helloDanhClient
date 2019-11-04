import React, { useState, useEffect } from "react";
import { Container, Card, Header } from "semantic-ui-react";
import MyInfoEditModal from "./MyInfoEditModal";

const MyInfo = props => {
  const [myInfo, setMyInfo] = useState({user:{}});

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
      .then(setMyInfo);
  };

  useEffect(() => {
      getMyInfo()
  }, [])

  return (
    <>
      <Container>
      <Header as="h1" textAlign='center'>My Info</Header>
        <Card.Description>
          <Card.Header>{myInfo.user.first_name} {myInfo.user.last_name}</Card.Header>
          <p>{myInfo.user.email}</p>
          <p>{myInfo.phone_number}</p>
          <p>{myInfo.address}</p>
          <MyInfoEditModal myInfoId={myInfo.id} key={myInfo.id} getMyInfo={getMyInfo} />
        </Card.Description>
      </Container>
    </>
  );
};
export default MyInfo;
