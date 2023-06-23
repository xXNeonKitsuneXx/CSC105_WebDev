import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Grid,
} from "@mui/material";

function Content() {
  return (
    //sx={{backgroundColor: { xs: "red", sm: "green", md: "blue" }}}>
    <Box sx={{marginTop: 2}}>
      <Box>
        <Typography variant = "h4" sx={{ marginLeft: 1 }}>
            Welcom to My Website
        </Typography>

        <Typography variant="body1" sx={{ marginLeft: 2, marginRight: 2}} pb={5}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </Typography>

        <Typography variant="body1" sx={{ marginLeft: 2, marginRight: 2}}>
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </Typography>
      </Box>
      
      <Grid p={1} container spacing={2} pt={2}>
        <Grid item xs={12} sm={12} md={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="../../public/assets/KON KON KITSUNE.gif"
                alt="Kitsune ALT"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  KON KON KITSUNE
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Kitsune Kitsune Kitsune vKitsune Kitsune Kitsune Kitsune
                  Kitsune Fox Lorem Ipsum is simply dummy text of the printing
                  dadasdadasdsa
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        

        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="../../public/assets/KON KON KITSUNE.gif"
                alt="Kitsune ALT"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  KON KON KITSUNE
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Kitsune Kitsune Kitsune vKitsune Kitsune Kitsune Kitsune
                  Kitsune Fox Lorem Ipsum is simply dummy text of the printing
                  dadasdadasdsa
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="../../public/assets/KON KON KITSUNE.gif"
                alt="Kitsune ALT"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  KON KON KITSUNE
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Kitsune Kitsune Kitsune vKitsune Kitsune Kitsune Kitsune
                  Kitsune Fox Lorem Ipsum is simply dummy text of the printing
                  dadasdadasdsa
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Content;
