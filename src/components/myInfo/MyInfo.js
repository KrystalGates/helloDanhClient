import React, { useState, useEffect } from "react";
import { Container, Card } from "semantic-ui-react";

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

  console.log(myInfo)

  return (
    <>
      <Container>
        <Card.Group itemsPerRow={4}>
          {myInfo.user.first_name}
          {myInfo.user.last_name}
          {myInfo.user.email}
          {myInfo.phone_number}
          {myInfo.address}
          {/* {
          myInfo.map(info =>
            (<p>

                {info.address}
            </p>)
        )} */}
        </Card.Group>
      </Container>
    </>
  );
};
export default MyInfo;
