import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import MovieCard from "./MovieCard";
import { Box } from "@mui/material";
import axios from "axios";
const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: "inherit",
  padding: theme.spacing(1),
}));

const MovieRows = () => {
  const [movies, setMovies] = React.useState();

  React.useEffect(() => {
    const getDatas = async () => {
      const data: any = await axios.get("/movies", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(data.data.categories, "---");
      if (data.data.isSuccess) {
        setMovies(data.data.categories);
      }
    };
    getDatas();
  }, []);
  React.useEffect(() => {
    console.log(movies, "---");
  }, []);
  return (
    <>
      {movies &&
        movies.map((movie) => (
          <Box
            sx={{ marginTop: "20px" }}
            id="margin-dense"
            className="my__container "
          >
            <Div sx={{ fontSize: "20px", marginBottom: "30px" }}>
              {movie.categoryName}
            </Div>

            <Grid className="my__container overFlowHandler " container>
              {movie.movies.map((movie) => (
                <Grid item xs={2}>
                  <MovieCard movieDetails={movie} />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
    </>
  );
};

export default MovieRows;
