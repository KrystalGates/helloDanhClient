import { Route } from "react-router-dom";
import React from "react";
import Home from "./components/home/Home";
import ContactList from "./components/contact/ContactList";
import AlertList from "./components/alert/AlertList";
import MyInfo from "./components/myInfo/MyInfo";

//Handles Routing for App
const ApplicationViews = () => {
  return (
    <React.Fragment>
        <Route
          exact
          path="/"
          render={props => { return (<Home {...props}/>)
          }}
        />
        <Route
          exact
          path="/contacts"
          render={props => { return (<ContactList {...props}/>)
          }}
        />
        <Route
          exact
          path="/alerts"
          render={props => { return (<AlertList {...props}/>)
          }}
        />
        <Route
          exact
          path="/MyInfo"
          render={props => { return (<MyInfo {...props}/>)
          }}
        />
    </React.Fragment>
  );
};

export default ApplicationViews;
