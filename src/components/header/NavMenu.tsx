import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchMoviesQuery } from "../../features/moviesSlice";
import { Login } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Modal,
} from "@mui/material";
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
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function NavMenu() {
  const [isFocused, setIsFocused] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  React.useEffect(() => {
    console.log(isFocused);
  }, [isFocused]);
  const [searchedWords, setSearchedWords] = React.useState("");
  const setSearchDataHandler = (e: string) => {
    setSearchedWords(e);
  };
  const [dataMovies, setDataMovies] = React.useState();

  const { data } = useSearchMoviesQuery(searchedWords);
  React.useEffect(() => {
    setDataMovies(data);
  }, [searchedWords]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {isFocused ? (
        <div className="divSearch">
          <Grid className="my__container overFlowHandler " container>
            {dataMovies &&
              dataMovies.movies
                .filter((movie) =>
                  movie.name.toLowerCase().includes(searchedWords.toLowerCase())
                )
                .map((filtered) => (
                  <Grid item xs={2}>
                    <>
                      <div>
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
                              {filtered.series.map((serie) => (
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
                          image={filtered.coverImg}
                        />
                        <CardContent className="card__content">
                          <Typography
                            gutterBottom
                            variant="h5"
                            style={{ fontSize: "20px", marginBottom: 0 }}
                            component="div"
                          >
                            {filtered.name}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small">Share</Button>
                          <Button size="small">Learn More</Button>
                        </CardActions>
                      </Card>
                    </>
                  </Grid>
                ))}
          </Grid>
        </div>
      ) : (
        ""
      )}
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            <img
              className="header_logo"
              src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
              alt="logo"
            />
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={(e) => setSearchDataHandler(e.target.value)}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
