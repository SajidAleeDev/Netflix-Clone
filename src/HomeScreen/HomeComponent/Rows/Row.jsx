import React, { useEffect, useState } from "react";
import axios from "../../../axios";

import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import YouTube from "react-youtube";

function Row({ title, FetchURL, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(FetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [FetchURL]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters

      autoplay: 1,
    },
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false) && clearUrl();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: {
      zero: "100%",
      xs: "100%",
      sm: "100%",
      md: "100%",
      lg: 900,
    },
    border: "none",
    bgcolor: "#000000",
  };
  const [trailerUrl, setTrailerUrl] = useState("");
  const [tvshow, setTvshow] = useState("");

  const handleClick = async (movie) => {
    console.log(movie);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${movie.id}/videos`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTI0OWM2NzY3NjUwMzY4OGU5MTI1ODZjMzUyMGNhZiIsInN1YiI6IjY0NGJkOGY4NTk2YTkxMDU0ZDU3ZTRjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.If7kAJOxLvVQ40B6iyWPYw4dB5cVPNFKwbQZxLHoi9s",
        },
      };

      axios

        .request(options)
        .then(function (response) {
          setTrailerUrl(response.data.results[0]?.key);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    handleOpen();
  };
  const showClick = async (movie) => {
    console.log(movie);
    if (tvshow) {
      setTvshow("");
    } else {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${movie.id}/videos`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTI0OWM2NzY3NjUwMzY4OGU5MTI1ODZjMzUyMGNhZiIsInN1YiI6IjY0NGJkOGY4NTk2YTkxMDU0ZDU3ZTRjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.If7kAJOxLvVQ40B6iyWPYw4dB5cVPNFKwbQZxLHoi9s",
        },
      };

      axios

        .request(options)
        .then(function (response) {
          setTvshow(response.data.results[0]?.key);
        })
        .catch(function (error) {
          console.error(error);
        });
    }

    handleOpen();
  };

  return (
    <>
      <div className="text-white ml-[20px] ">
        <h1>{title}</h1>
        <div className="flex overflow-y-hidden overflow-x-scroll scrollbar-none scroll-smooth p-[20px]">
          {movies.map(
            (movie) =>
              ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                <img
                  onClick={() =>
                    isLargeRow ? showClick(movie) : handleClick(movie)
                  }
                  className={`max-h-[100px] object-contain mr-[10px] hover:scale-[1.08] hover:opacity-[1] transition-transform duration-[450ms]  ${
                    isLargeRow &&
                    "max-h-[250px] hover:scale-[1.09] hover:opacity-[1]"
                  }`}
                  key={movie.id}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />
              )
          )}
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <YouTube videoId={trailerUrl || tvshow} opts={opts} className="" />
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default Row;
