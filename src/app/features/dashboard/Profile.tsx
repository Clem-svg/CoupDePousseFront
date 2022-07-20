import { Card, Typography, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Profile = () => {
  const currentUser = useSelector(
    (state: RootState) => state.session.currentUser
  );
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item width={"100%"}>
        <Card
          raised
          sx={{
            height: "100%",
            backgroundColor: "transparent",
            boxShadow: "none",
            border: 1,
            borderColor: "#E0E0E0",
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
            height="100%"
            p={3}
          >
            <Box color="secondary" mb={0.5}>
              <Typography
                variant="h5"
                component="div"
                paddingRight={1}
                sx={{ fontWeight: "bold" }}
              >
                Nom d&apos;utilisateur :
              </Typography>
            </Box>
            <Typography color="text.secondary" sx={{ fontWeight: "bold" }}>
              <p>Email: </p>
            </Typography>
            <Typography color="text.secondary">
              <p>{currentUser?.email}</p>
            </Typography>
            <Typography color="text.secondary" sx={{ fontWeight: "bold" }}>
              <p>Description: {currentUser?.description}</p>
            </Typography>
            <Typography color="text.secondary">
              <p>{currentUser?.description}</p>
            </Typography>

            <Typography color="text.secondary" sx={{ fontWeight: "bold" }}>
              <p>Outils:</p>
            </Typography>
            <Typography color="text.secondary">
              <p>{currentUser?.tools}</p>
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Profile;
