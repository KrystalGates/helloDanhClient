import React, { useState, useEffect } from "react";
import { Container, Card } from "semantic-ui-react";
import AlertCard from "./AlertCard";

const AlertList = props => {
  const [alerts, setAlerts] = useState([]);

  const getAlerts = () => {
    fetch("http://127.0.0.1:8000/alerts", {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("helloDanh_token")}`
      }
    })
      .then(res => res.json())
      .then((allAlerts) => {
        setAlerts(allAlerts)
    })
  };

  useEffect(()=>{getAlerts()}, [])

  return (
    <>
    <h1>Alerts</h1>
      <Container>
        <Card.Group itemsPerRow={1}>
          <Card.Content>
          {
          alerts.map(myAlert =>
            <AlertCard alert={myAlert} />
        )}
          </Card.Content>
        </Card.Group>
      </Container>
    </>
  );
};
export default AlertList;
