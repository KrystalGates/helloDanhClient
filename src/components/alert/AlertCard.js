import React from "react"
import { Card, Button } from 'semantic-ui-react'


const AlertCard = props => {
    return (
        <Card.Description>
            <Card.Header>{props.alert.alert}</Card.Header>
                <Button>Edit</Button>
        </Card.Description>
    )

}
export default AlertCard