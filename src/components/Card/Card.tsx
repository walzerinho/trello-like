import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";

type OneCardProps = {
  title: string;
  description: string;
  proprio: string;
  comments: string;
  image: string | undefined;
};

export default function OneCard(props: OneCardProps) {
  const { title, description, proprio, comments } = props;
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          {/* Si j'ai une pièce jointe, je fais apparaître l'image */}
          <CardMedia
            component="img"
            height="140"
            image="src\assets\img\dogo.png"
            alt="dogo"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {proprio}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {comments}
            </Typography>
            <Button variant="outlined">Modifier</Button>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
