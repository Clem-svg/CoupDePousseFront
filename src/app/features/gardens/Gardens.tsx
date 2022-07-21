/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import axios from "../api/axios";
import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import GardenCard from "../components/GardenCard";
import { LoadingGif } from "../loading/LoadingGif";
const GARDEN_API_URL = "/gardens/";

function Dashboard() {
  const [errorMessage, setErrorMessage] = useState("");
  const [allGardens, setAllGardens] = useState<Array<any>>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (errorMessage !== "") {
      setErrorMessage("");
    }
    (async () => {
      const result = await getAllGardens();
      setAllGardens(result);
      setIsLoading(false);
    })();
  }, []);

  async function getAllGardens() {
    return axios
      .get(GARDEN_API_URL)
      .then((response: any) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error: any) => {
        return error.response.data;
      });
  }

  return (
    <section>
      {isLoading && 
      <LoadingGif />
      }
      <Typography variant="h2" component="h2" sx={{ padding: 2 }}>
        Mon espace
      </Typography>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {allGardens.map((garden) => {
          console.log(garden);
          return <GardenCard garden={garden} />;
        })}
      </Grid>
    </section>
  );
}

export default Dashboard;
