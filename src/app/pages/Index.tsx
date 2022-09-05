/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import React from "react";
import { Grid } from "@mui/material";
import { LoadingGif } from "../features/components/LoadingGif";
import GardenCard from "../features/components/GardenCard";
import { getAllGardens } from "../api/gardenAPI";

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

  return (
    <section>
      {isLoading && 
      <LoadingGif />
      }
      {/* <Typography variant="h2" component="h2" sx={{ padding: 2 }}>
        Mon espace
      </Typography> */}
      
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
