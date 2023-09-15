import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
export default function CoverSlider() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  return (
    <div className="cover">
      <Slider {...settings}>
        <div className="slider_items ">
          <img
            className="slider__img"
            style={{ height: "100%" }}
            src="https://hips.hearstapps.com/hmg-prod/images/once-upon-a-time-in-america-1530579166.jpg"
            alt="movie1"
          />
          <div className="content__slider">
            <CardContent>
              <Typography
                style={{ fontWeight: "bold" }}
                gutterBottom
                variant="h5"
                component="div"
              >
                Lizard
              </Typography>
              <Typography
                style={{ fontWeight: "bold", fontSize: "17px" }}
                variant="body2"
                color="white"
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <div className="my__container">
              <Button
                style={{
                  fontWeight: "bold",
                  backgroundColor: "red",
                  color: "black",
                }}
                variant="contained"
              >
                Watch
              </Button>
            </div>
          </div>
        </div>
        <div className="slider_items ">
          <img
            className="slider__img"
            style={{ height: "100%" }}
            src="https://i.gzn.jp/img/2022/11/11/john-wick-chapter-4-trailer/s03.jpg"
            alt="movie1"
          />
          <div className="content__slider">
            <CardContent>
              <Typography
                style={{ fontWeight: "bold" }}
                gutterBottom
                variant="h5"
                component="div"
              >
                Lizard
              </Typography>
              <Typography
                style={{ fontWeight: "bold", fontSize: "17px" }}
                variant="body2"
                color="white"
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <div className="my__container">
              <Button
                style={{
                  fontWeight: "bold",
                  backgroundColor: "red",
                  color: "black",
                }}
                variant="contained"
              >
                Watch
              </Button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
