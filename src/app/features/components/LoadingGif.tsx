import { Box, Grid, Typography } from "@mui/material";
import * as React from "react";
import gif from "../../../assets/loading.gif";

export const LoadingGif = () => {
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center">
      <Grid item xs="auto">
        {/* <Box
          component="img"
          sx={{
            marginTop: "15vh",
            height: "100%",
            width: "auto",
            maxHeight: { xs: 250, md: 400 },
          }}
          alt="Chargement"
          src={gif}
        /> */}
      </Grid>
      <Grid item xs="auto">
        <Typography color="primary" marginRight={2} marginTop={1} textAlign="center">
                chargement
        </Typography>

      </Grid>
    </Grid>
  );
};

export default LoadingGif;
