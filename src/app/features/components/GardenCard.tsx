/* eslint-disable @typescript-eslint/ban-types */
import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  CardMedia,
  Button,
  Grid,
} from "@mui/material";
import GardenInterface from "../api/gardenAPI";

export default class GardenCard extends React.Component<GardenInterface, {}> {
  constructor(props: GardenInterface) {
    super(props);
  }
  render() {
    const garden = this.props.garden
    return (
      <Card sx={{ display: "flex", height: "25vh", width: "45%", margin:"10px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h2">
              {/* {garden.title} */}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {garden.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Voir</Button>
          </CardActions>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: "100%" }}
          src="https://images.pexels.com/photos/1105018/pexels-photo-1105018.jpeg?cs=srgb&dl=pexels-%E2%96%83-1105018.jpg&fm=jpg"
          alt={"title"}
        ></CardMedia>
      </Card>
    );
  }
}
