import React, { useEffect, useState } from "react";
import * as emailjs from "emailjs-com";
import { Button, Confirm, Image } from "semantic-ui-react";
import helloDanhRed from '../../icons/helloDanhRed.svg'
import helloDanhYellow from '../../icons/helloDanhYellow.svg'
import helloDanhGreen from '../../icons/helloDanhGreen.svg'

const Home = props => {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [contactsEmails, setContactsEmails] = useState("")
  const [confirmRed, setConfirmRed] = useState(false)
  const [confirmYellow, setConfirmYellow] = useState(false)
  const [confirmGreen, setConfirmGreen] = useState(false)

  const toggleRed = () => {
    setConfirmRed(!confirmRed);
  };

  const toggleYellow = () => {
    setConfirmYellow(!confirmYellow);
  };

    const toggleGreen = () => {
      setConfirmGreen(!confirmGreen);
    };

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

  const sendEmail = (alert_placement_id, toggle) => {
    const service_id = "fromHelloDanh";
    const template_id = "hellodanh";
    console.log('contacts emails', contactsEmails)
    if (contactsEmails === ""){
      window.alert("You must add contacts before sending out an alert!")
      props.history.push("/contacts")
    }
    else{
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
          const emailInfo = {
            subject: alertPlacement.subject,
            email_to: contactsEmails,
            user_name: userName,
            user_email: userEmail,
            alert: alertPlacement.alert
          };
          if (alert_placement_id === 1){
            toggleRed()
          }
          else if (alert_placement_id === 2){
            toggleYellow()
          }
          else if (alert_placement_id === 3 ){
            toggleGreen()
          }
          emailjs.init("user_B0VxAQOSidaRDroTGISIj");

          emailjs.send(service_id, template_id, emailInfo).then(
            function(response) {
              window.alert(
                "Your alert has been sent!",
                response.text
              );
            },
            function(error) {
              window.alert("Alert failed to send.", error);
            }
          );
        });

    }

  };


  useEffect(getUserAndContacts, []);

  return (
    <>
      <p>
        <Confirm
          trigger={<Image src={helloDanhRed} onClick={toggleRed}/>}
          open={confirmRed}
          onCancel={toggleRed}
          className="confRed"
          style={{ textAlign: "center" }}
          onConfirm={() => sendEmail(1)}
          content="Are you sure you want to send this alert?"
        />
      </p>
      <p>
        <Confirm
          trigger={<Image src={helloDanhYellow} onClick={toggleYellow}/>}
          open={confirmYellow}
          onCancel={toggleYellow}
          className="confYellow"
          style={{ textAlign: "center" }}
          onConfirm={() => sendEmail(2)}
          content="Are you sure you want to send this alert?"
        />
        <Confirm
          trigger={<Image src={helloDanhGreen} onClick={toggleGreen}/>}
          open={confirmGreen}
          onCancel={toggleGreen}
          className="confGreen"
          style={{ textAlign: "center" }}
          onConfirm={() => sendEmail(3)}
          content="Are you sure you want to send this alert?"
        />
      </p>
    </>
  );
};
export default Home;
