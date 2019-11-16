import React, { useState, useEffect } from "react";
import { Header, Card, Container } from "semantic-ui-react";
import AlertCard from "./AlertCard";

//Lists alerts
const AlertList = props => {
  const [alerts, setAlerts] = useState([]);

  //Fetch call GET for all alerts and sets state upon useEffect
  const getAlerts = () => {
    fetch("https://api.hellodanh.com//alerts", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("helloDanh_token")}`
      }
    })
      .then(res => res.json())
      .then(allAlerts => {
        setAlerts(allAlerts);
      });
  };

  useEffect(() => {
    getAlerts();
  }, []);

  return (
    <Container>
      <Header as="h1" textAlign="center">
        Alerts{" "}
      </Header>
      <Card.Group itemsPerRow={1}>
        {alerts.map(myAlert => (
          <AlertCard key={myAlert.id} alert={myAlert} getAlerts={getAlerts} />
        ))}
      </Card.Group>
    </Container>
  );
};
export default AlertList;
