import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import MovieCard from "./MovieCard";
import { Box } from "@mui/material";
import { useGetAllMoviesQuery } from "../../features/moviesSlice";
import Loader from "../Loader/Loader";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: "inherit",
  padding: theme.spacing(1),
}));

const MovieRows = () => {
  const [movies, setMovies] = React.useState();
  const getAllMovies = useGetAllMoviesQuery("e");

  React.useEffect(() => {
    const getDatas = async () => {
      const { data } = getAllMovies;
      if (data.isSuccess) {
        setMovies(data.categories);
      }
    };
    getDatas();
  }, [getAllMovies]);

  return (
    <>
      {getAllMovies.status == "pending" ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};

export default MovieRows;
