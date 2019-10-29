import React, { useEffect, useState} from "react"
import { Button, Modal, Form } from "semantic-ui-react"

const AlertEditModal = props => {
    const [alertObj, setAlertObj] = useState([])
    const [editAlert, setEditAlert] = useState([])

    const getAlert = () => {
        fetch(`http://127.0.0.1:8000/alerts/${props.alertId}`, {
          method: "GET",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("helloDanh_token")}`
          }
        })
          .then(res => res.json())
          .then((singleAlert) =>
            setAlertObj(singleAlert)
        )
      };

    const updateAlert = (e,alertId) => {
        e.preventDefault()
        fetch(`http://127.0.0.1:8000/alerts/${alertId}` ,{
          method: "PUT",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("helloDanh_token")}`
          },
          body: JSON.stringify({
            alert: editAlert
          })
        })
        .then((alerts) =>
            props.getAlerts(alerts)
        )
        .then((alert)=> getAlert(props.alertId))
    }

    useEffect(getAlert, []);

    return (
        <Modal id="alert_edit_form"
              size="tiny"
              trigger={<Button>Edit</Button>}
            >
              <Modal.Header>Update Alert</Modal.Header>
              <Modal.Content>
                <Form onSubmit={(e)=>updateAlert(e,props.alertId)}>
                  <Form.Input
                    onChange={e => setEditAlert(e.target.value)}
                    id="singleAlert"
                    className="form-control"
                    // icon="lock"
                    // iconPosition="left"
                    type="singleAlert"
                    defaultValue={alertObj.alert}
                  />
                  <Button content="Save" primary />
                </Form>
              </Modal.Content>
            </Modal>
    )
}

export default AlertEditModal