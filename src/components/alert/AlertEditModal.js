import React, { useEffect, useState } from "react";
import { Button, Modal, Form, TextArea } from "semantic-ui-react";

//Modal for Editing Alert
const AlertEditModal = props => {
  const [alertObj, setAlertObj] = useState([]);
  const [editAlert, setEditAlert] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  //Handles open and close of Modal
  const toggle = () => {
    setOpenForm(!openForm);
  };

  //Fetch call GET for single alert and sets state upon useEffect
  const getAlert = () => {
    fetch(`http://api.hellodanh.com/alerts/${props.alertId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("helloDanh_token")}`
      }
    })
      .then(res => res.json())
      .then(singleAlert => setAlertObj(singleAlert));
  };

  //Fetch call to PUT for update alert
  const updateAlert = (e, alertId) => {
    e.preventDefault();
    fetch(`http://api.hellodanh.com/alerts/${alertId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("helloDanh_token")}`
      },
      body: JSON.stringify({
        alert: editAlert
      })
    })
      .then(alerts => props.getAlerts(alerts))
      .then(alert => {
        getAlert(props.alertId);
        toggle();
      });
  };

  useEffect(getAlert, []);

  return (
    <Modal
      id="alert_edit_form"
      size="tiny"
      trigger={
        <Button
          content="Edit"
          color="teal"
          style={{ marginTop: "75%", marginLeft: "-2em" }}
          onClick={toggle}
        />
      }
      open={openForm}
    >
      <Modal.Header>Update Alert</Modal.Header>
      <Modal.Content>
        <Form onSubmit={e => updateAlert(e, props.alertId)}>
          <TextArea
            rows={15}
            onChange={e => setEditAlert(e.target.value)}
            id="singleAlert"
            className="form-control"
            type="singleAlert"
            defaultValue={alertObj.alert}
          />
          <Button content="Save" color="teal" style={{ marginTop: "1em" }} />
          <Button content="Cancel" onClick={toggle} />
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default AlertEditModal;
