import React from "react"
import { Card, Button } from 'semantic-ui-react'


const ContactCard = props => {
    return (

        <Card.Description>
            <Card.Header>{props.contact.first_name} {props.contact.last_name}</Card.Header>
                <p>{props.contact.email}</p>
                <p>{props.contact.address}</p>
                <p>{props.contact.phone_number}</p>
                <Button>Edit</Button>
                <Button>Delete</Button>
        </Card.Description>
    )

}
export default ContactCard