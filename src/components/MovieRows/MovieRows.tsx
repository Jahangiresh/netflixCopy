import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import MovieCard from "./MovieCard";
import { Box } from "@mui/material";
import { useGetAllMoviesQuery } from "../../features/moviesSlice";
import Loader from "../Loader/Loader";
import { ICategory, IMovie } from "../../types/movie.types";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: "inherit",
  padding: theme.spacing(1),
}));

const MovieRows = () => {
  const [categories, setCategories] = React.useState<ICategory[]>();
  const getAllMovies = useGetAllMoviesQuery("e");

  React.useEffect(() => {
    const getDatas = async () => {
      const { data } = getAllMovies;
      if (data.isSuccess) {
        setCategories(data.categories);
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
          {categories &&
            categories.map((category: ICategory) => (
              <Box
                sx={{ marginTop: "20px" }}
                id="margin-dense"
                className="my__container "
              >
                <Div sx={{ fontSize: "20px", marginBottom: "30px" }}>
                  {category.categoryName}
                </Div>

                <Grid className="my__container overFlowHandler " container>
                  {category.movies.map((movie: IMovie) => (
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
