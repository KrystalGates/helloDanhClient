import React from "react"
import { Card } from 'semantic-ui-react'
import ContactEditModal from "./ContactEditModal"
import ContactDeleteModal from "./ContactDeleteModal"


const ContactCard = props => {
    return (

        <Card.Description>
            <Card.Header>{props.contact.first_name} {props.contact.last_name}</Card.Header>
                <p>{props.contact.email}</p>
                <p>{props.contact.address}</p>
                <p>{props.contact.phone_number}</p>
                <ContactEditModal contactId={props.contactId} getContacts={props.getContacts}/>
                <ContactDeleteModal contactId={props.contactId} getContacts={props.getContacts}/>
        </Card.Description>
    )

}
export default ContactCard