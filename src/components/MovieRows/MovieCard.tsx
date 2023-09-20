import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";
import { IMovie, IMovieSeries } from "../../types/movie.types";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "#121212",
  border: "0",
  boxShadow: 24,
  ring: "0",
  paddingBottom: "20px",
};
const styleCover = {
  width: "100%",
  height: "300px",
};
export default function MovieCard(props: any) {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div>
        {/* <ModalComponent open={open} movieDetails={props.movieDetails} /> */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box sx={styleCover}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/OAZWXUkrjPc?si=pJxkUubUCGSeB6Eo"
                title="ss"
                allow=" clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
              ></iframe>
            </Box>
            <Grid
              sx={{ marginTop: "30px" }}
              className="my__container overFlowHandler "
              container
            >
              {props.movieDetails.series.map((serie: IMovieSeries) => (
                <Grid item xs={3}>
                  <Box
                    sx={{
                      height: "140px",
                      background: "balck",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      backgroundColor: "black",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      width={"60%"}
                      height={"110px"}
                      src="https://www.friidesigns.com/wp-content/uploads/2018/11/white-play-icon-png-6.png"
                      alt="pl"
                    />
                    <Typography>{serie.name}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Modal>
      </div>
      <Card
        onClick={handleOpen}
        className="card__movie"
        sx={{ width: 260, height: "300px" }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="100%"
          image={props.movieDetails.coverImg}
        />
        <CardContent className="card__content">
          <Typography
            gutterBottom
            variant="h5"
            style={{ fontSize: "20px", marginBottom: 0 }}
            component="div"
          >
            {props.movieDetails.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}
