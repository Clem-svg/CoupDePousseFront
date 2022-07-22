import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneGarden } from '../api/gardenAPI';
import { RootState } from '../store';
import { Grid } from '@mui/material';
import GardenCard from '../features/components/GardenCard';
import LoadingGif from '../features/components/LoadingGif';
import GardenInterface from '../api/gardenAPI';


function AboutPage() {
    const [message, setMessage] = useState('');
    const { id } = useParams();
    const [errorMessage, setErrorMessage] = useState("");
    const [oneGarden, setOneGarden] = useState<any>(
      {
        garden: {
          id: { id },
          city: "",
          country: "",
          created_at: "",
          description: "",
          floor_type: "",
          image_url: "",
          is_available: false,
          latitude: "",
          longitude: "",
          orientation: "",
          parking: false,
          street_name: "",
          street_number: "",
          surface: "",
          title: "",
          tools_available: false,
          updated_at: "",
          user_id: "",
          zip_code: ""
        }
      } as unknown as GardenInterface
    )
    const [isLoading, setIsLoading] = useState(true);
    
    const accessToken = useSelector(
      (state: RootState) => state.session.accessToken
      );
      
      useEffect(() => {
        if (errorMessage !== "") {
          setErrorMessage("");
        }
        (async () => {
          const result = await getOneGarden(accessToken, id);
          console.log(result)
          setOneGarden(result);
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
            <GardenCard garden = {oneGarden}/>
          </Grid>
        </section>
    )
        }

export default AboutPage;
