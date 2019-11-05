import React from "react";
import { Card, Image, Grid } from "semantic-ui-react";
import AlertEditModal from "./AlertEditModal";
import helloDanhRed from "../../icons/helloDanhRed.png";
import helloDanhYellow from "../../icons/helloDanhYellow.png";
import helloDanhGreen from "../../icons/helloDanhGreen.png";

const AlertCard = props => {
  return (
    <Card>
      <Card.Content>
        <Grid container centered columns={3}>
          <Grid.Row >
            <Grid.Column width={2} verticalAlign="left">
              {props.alert.alert_placement_id === 1 ? (
                <Image src={helloDanhRed} size="small" />
              ) : null}
              {props.alert.alert_placement_id === 2 ? (
                <Image src={helloDanhYellow} size="small" />
              ) : null}
              {props.alert.alert_placement_id === 3 ? (
                <Image src={helloDanhGreen} size="small" />
              ) : null}
            </Grid.Column>
            <Grid.Column width={12} style={{textAlign:"left", border: ".08em solid #d4d4d5", borderRadius: "5px", marginRight:"3em"}}>
              <Card.Description >{props.alert.alert}</Card.Description>
            </Grid.Column>
            <Grid.Column width={1} >
              <AlertEditModal
                alertId={props.alert.id}
                getAlerts={props.getAlerts}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
    </Card>
  );
};
export default AlertCard;
