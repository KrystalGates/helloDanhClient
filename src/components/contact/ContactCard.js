import React from "react"
import { Card } from 'semantic-ui-react'


const ContactCard = props => {
    return (
        <Card.Content>
            <Card.Header>{props.contact.first_name} {props.contact.last_name}</Card.Header>
        </Card.Content>
    )

}
export default ContactCard