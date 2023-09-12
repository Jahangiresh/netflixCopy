import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import MovieCard from "./MovieCard";
import { Box } from "@mui/material";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: "inherit",
  padding: theme.spacing(1),
}));

const MovieRows = () => {
  return (
    <Box
      sx={{ marginTop: "20px" }}
      id="margin-dense"
      className="my__container "
    >
      <Div sx={{ fontSize: "20px", marginBottom: "30px" }}>
        {"ACTION MOVIES"}
      </Div>
      <Grid className="my__container " container>
        <Grid item xs={3}>
          <MovieCard />
        </Grid>
        <Grid item xs={3}>
          <MovieCard />
        </Grid>
        <Grid item xs={3}>
          <MovieCard />
        </Grid>
        <Grid item xs={3}>
          <MovieCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MovieRows;
