import React from "react";
import Modal from "@mui/material/Modal";
import { Box, Grid, Typography } from "@mui/material";
import { IMovieSeries } from "../../types/movie.types";
import { Cancel } from "@mui/icons-material";
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
};
const styleCover = {
  width: "100%",
  height: "300px",
};
const ModalComponent = (props: any) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Modal
      open={props.open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Cancel />

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
              <Box sx={{ height: "140px" }}>
                <img
                  width={"100%"}
                  height={"110px"}
                  src="https://media.istockphoto.com/id/1192173219/vector/play-button.jpg?s=612x612&w=0&k=20&c=MNhAxkFgl2eQFu5TMFccbqQJydJIUb3f1uFrn46gdlE="
                  alt="pl"
                />
                <Typography>{serie.name}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
