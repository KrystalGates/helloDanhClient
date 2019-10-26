import React, { useEffect, useState } from "react"
import { Button } from 'semantic-ui-react'
import AddContact from "./AddContact"

const ContactList = props => {
    const [contacts, setContacts] = useState()

    const getContacts = () => {
        fetch("http://localhost:8000/contacts", {
          method: "GET",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("helloDanh_token")}`
          }
        })
          .then(res => res.json())
          .then(setContacts);
      }

    useEffect(() => {
        getContacts()}, [])

    console.log(contacts)

    return (
        <>
        <AddContact {...props}/>
        <p>Hello! Contact ContactList












            Hello
            Hello
        </p>
        </>
    )

}
export default ContactList