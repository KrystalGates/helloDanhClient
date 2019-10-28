import React, { useState, useEffect } from "react";
import { Container, Card } from "semantic-ui-react";

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

  console.log(alerts)

  return (
    <>
      <Container>
        <Card.Group itemsPerRow={4}>
          {
          alerts.map(myAlert =>
            (<p>

                {myAlert.alert}
            </p>)
        )}
        </Card.Group>
      </Container>
    </>
  );
};
export default AlertList;
