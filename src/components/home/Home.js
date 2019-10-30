import React, { useEffect, useState } from "react";
import * as emailjs from "emailjs-com";
import { Button, Confirm } from "semantic-ui-react";

const Home = props => {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [contactsEmails, setContactsEmails] = useState("")
  const subject = "this subject";

  const getUserAndContacts = () => {
    fetch("http://127.0.0.1:8000/customusers/currentuser", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("helloDanh_token")}`
      }
    })
      .then(res => res.json())
      .then(contacts => {
        setUserName(`${contacts.user.first_name} ${contacts.user.last_name}`)
        setUserEmail(contacts.user.email)
        let emails = ""
        contacts.contacts.map(contact =>{
          emails += contact.email + ", "
        })
        setContactsEmails(emails)
      });
  };

  const sendEmail = alert_placement_id => {
    const service_id = "fromHelloDanh";
    const template_id = "hellodanh";

    fetch(
      `http://127.0.0.1:8000/alerts?alert_placement_id=${alert_placement_id}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("helloDanh_token")}`
        }
      }
    )
      .then(res => res.json())
      .then(alertPlacement => {
        console.log("alert placement", alertPlacement.alert);
        const emailInfo = {
          subject: subject,
          email_to: contactsEmails,
          user_name: userName,
          user_email: userEmail,
          alert: alertPlacement.alert
        };
        console.log("emailinfo", emailInfo);
        emailjs.init("user_B0VxAQOSidaRDroTGISIj");

        emailjs.send(service_id, template_id, emailInfo).then(
          function(response) {
            window.alert(
              "Success! The world is a better place because of you!",
              response.text
            );
          },
          function(error) {
            window.alert("Compliment Email Failed...", error);
          }
        );
      });
  };


  useEffect(getUserAndContacts, []);
  console.log("user name", userName);
  console.log("user email", userEmail);
  console.log('all emails', contactsEmails)

  return (
    <>
      <p>
        <Confirm
          trigger={<Button>Red</Button>}
          className="conf"
          style={{ textAlign: "center" }}
          onConfirm={() => sendEmail(1)}
          content="Are you sure you want to send this alert?"
        />
      </p>
      <p>
        <Confirm
          trigger={<Button>Yellow</Button>}
          className="conf"
          style={{ textAlign: "center" }}
          onConfirm={() => sendEmail(2)}
          content="Are you sure you want to send this alert?"
        />
        <Confirm
          trigger={<Button>Green</Button>}
          className="conf"
          style={{ textAlign: "center" }}
          onConfirm={() => sendEmail(3)}
          content="Are you sure you want to send this alert?"
        />
      </p>
    </>
  );
};
export default Home;
