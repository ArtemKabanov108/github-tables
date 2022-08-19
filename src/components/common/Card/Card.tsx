import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

interface ICardProps {
  title: string;
  description: string;
  imageProp: string;
}

export const CommonCard: FC<ICardProps> = ({ title, description, imageProp }) => {
  return (
    <Card sx={{ maxWidth: 345, minWidth: '30vw' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imageProp}
          alt="user or something else"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
