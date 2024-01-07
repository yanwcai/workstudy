import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import catImg from "../images/cat1.jpeg";

const ActionAreaCard = () => {
  return (
    <Card sx={{ maxWidth: 345, padding: "50px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={catImg}
          alt="cat"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Cat
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Cat Wiki
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}



export { ActionAreaCard };