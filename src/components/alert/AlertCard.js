import React from "react"
import { Card } from 'semantic-ui-react'
import AlertEditModal from "./AlertEditModal"


const AlertCard = props => {
    return (
        <Card.Description>
            <Card.Header>{props.alert.alert}</Card.Header>
                <AlertEditModal alertId={props.alert.id} getAlerts={props.getAlerts}/>
        </Card.Description>
    )

}
export default AlertCard