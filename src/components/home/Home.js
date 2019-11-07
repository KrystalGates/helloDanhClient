import React, { useEffect, useState } from "react";
import * as emailjs from "emailjs-com";
import { Confirm, Image, Grid } from "semantic-ui-react";
import helloDanhRed from "../../icons/helloDanhRed.png";
import helloDanhYellow from "../../icons/helloDanhYellow.png";
import helloDanhGreen from "../../icons/helloDanhGreen.png";

//Renders Home page with three Buttons representing three alerts
const Home = props => {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [contactsEmails, setContactsEmails] = useState("");
  const [confirmRed, setConfirmRed] = useState(false);
  const [confirmYellow, setConfirmYellow] = useState(false);
  const [confirmGreen, setConfirmGreen] = useState(false);

  //Handles open and close for Red Button
  const toggleRed = () => {
    setConfirmRed(!confirmRed);
  };

  //Handles open and close for Yellow Button
  const toggleYellow = () => {
    setConfirmYellow(!confirmYellow);
  };

  //Handles open and close for Green Button
  const toggleGreen = () => {
    setConfirmGreen(!confirmGreen);
  };

  //Handles getting current user info and contacts associated with that user. Sets state upon useEffect
  const getUserAndContacts = () => {
    fetch("http://api.hellodanh.com/customusers/currentuser", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("helloDanh_token")}`
      }
    })
      .then(res => res.json())
      .then(contacts => {
        setUserName(`${contacts.user.first_name} ${contacts.user.last_name}`);
        setUserEmail(contacts.user.email);
        let emails = "";
        contacts.contacts.map(contact => {
          emails += contact.email + ", ";
        });
        setContactsEmails(emails);
      });
  };

  //Handles getting alert associated with colored button and sends email with user info, contacts to send to, and the corresponding alert
  const sendEmail = (alert_placement_id, toggle) => {
    const service_id = "fromHelloDanh";
    const template_id = "hellodanh";
    if (contactsEmails === "") {
      window.alert("You must add contacts before sending out an alert!");
      props.history.push("/contacts");
    } else {
      fetch(
        `http://api.hellodanh.com/alerts?alert_placement_id=${alert_placement_id}`,
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
          if (alert_placement_id === 1) {
            toggleRed();
          } else if (alert_placement_id === 2) {
            toggleYellow();
          } else if (alert_placement_id === 3) {
            toggleGreen();
          }
          emailjs.init("user_B0VxAQOSidaRDroTGISIj");

          emailjs.send(service_id, template_id, emailInfo).then(
            function(response) {
              window.alert("Your alert has been sent!", response.text);
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
    <Grid>
      <Grid.Row centered>
        <Confirm
          trigger={
            <Image
              src={helloDanhRed}
              className="home"
              style={{ marginTop: "-2em", marginBottom: "-10em" }}
              size="large"
              onClick={toggleRed}
            />
          }
          open={confirmRed}
          onCancel={toggleRed}
          className="confRed"
          style={{ textAlign: "center" }}
          onConfirm={() => sendEmail(1)}
          content="Are you sure you want to send this alert?"
        />
      </Grid.Row>
      <Grid.Row centered>
        <Confirm
          trigger={
            <Image
              src={helloDanhYellow}
              className="home"
              style={{ marginRight: "10em" }}
              size="medium"
              onClick={toggleYellow}
            />
          }
          open={confirmYellow}
          onCancel={toggleYellow}
          className="confYellow"
          style={{ textAlign: "center" }}
          onConfirm={() => sendEmail(2)}
          content="Are you sure you want to send this alert?"
        />
        <Confirm
          trigger={
            <Image
              src={helloDanhGreen}
              className="home"
              size="medium"
              onClick={toggleGreen}
            />
          }
          open={confirmGreen}
          onCancel={toggleGreen}
          className="confGreen"
          style={{ textAlign: "center" }}
          onConfirm={() => sendEmail(3)}
          content="Are you sure you want to send this alert?"
        />
      </Grid.Row>
    </Grid>
  );
};
export default Home;
