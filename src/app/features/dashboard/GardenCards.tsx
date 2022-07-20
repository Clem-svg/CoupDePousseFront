import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

function GardenCards() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', height:"25vh", width:"100%"}}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width:"100%" }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: "100%"}}
        src="https://images.pexels.com/photos/1105018/pexels-photo-1105018.jpeg?cs=srgb&dl=pexels-%E2%96%83-1105018.jpg&fm=jpg"        alt="Live from space album cover"
      >
</CardMedia>
    </Card>
  );
}

export default GardenCards