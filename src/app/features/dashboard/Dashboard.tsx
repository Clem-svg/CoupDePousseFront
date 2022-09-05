import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React from "react";
import Profile from "./Profile";
import { Container, Typography } from "@mui/material";
import GardenCard from "../components/GardenCard";



function Dashboard() {
  const GARDEN_API_URL = "/gardens.json";

  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const [errorMessage, setErrorMessage] = useState("");
  const [allGardens, setAllAllGardens] = useState([]);
  const [displayedAllGardens, setDisplayedAllGardens] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const accessToken = useSelector(
    (state: RootState) => state.session.accessToken
  );


  return (
    <section>
      <Typography variant="h2" component="h2" sx={{ padding: 2 }}>
        Mon espace
      </Typography>

      <Container maxWidth="md">
        <Box sx={{ width: "100%" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                centered
                selectionFollowsFocus
              >
                <Tab label="Profil" value="1" />
                <Tab label="Annonces" value="2" />
                <Tab label="Favoris" value="3" />
                <Tab label="Messagerie" value="4" />
                <Tab label="Commentaires" value="5" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Profile />
            </TabPanel>
            <TabPanel value="2">
              
            </TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
            <TabPanel value="4">Item Three</TabPanel>
            <TabPanel value="5">Item Three</TabPanel>
          </TabContext>
        </Box>
      </Container>
    </section>
  );
}

export default Dashboard;
