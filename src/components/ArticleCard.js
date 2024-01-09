import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import catImg from "../images/cat1.jpeg";
import Link from '@mui/material/Link';

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
          <Typography gutterBottom variant="h5">
            <Link href="#article_one" underline="none">
              Article One
            </Link>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Article One Content Brief
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export { ActionAreaCard };