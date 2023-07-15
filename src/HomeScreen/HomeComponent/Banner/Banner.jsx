import React, { useEffect, useState } from "react";
import axios from "./../../../axios";
import Request from "./../../../Request";

import Box from "@mui/material/Box";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";

import Modal from "@mui/material/Modal";
import YouTube from "react-youtube";
function Banner() {
  const [movie, setMovie] = useState([]);
  const style = {
    position: "absolute",
    top: "34%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: {
      zero: "100%",
      xs: "100%",
      sm: "100%",
      md: "100%",
      lg: "80%",
    },
    border: "none",
    bgcolor: "#000000",
  };
  const info = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: {
      zero: "100%",
      xs: "100%",
      sm: "100%",
      md: "100%",
      lg: "41.6%",
    },
    border: "none",

    height: "400px",
    borderRadius: "10px",
  };

  const opts = {
    height: "390",
    width: "90%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters

      autoplay: 1,
    },
  };
  const optss = {
    height: "250",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters

      autoplay: 1,
    },
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(Request.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [opens, setOpens] = useState(false);
  const handleOpens = () => setOpens(true);
  const handleCloses = () => setOpens(false);

  const [play, setPlay] = useState("");

  const ClickPlay = (movie) => {
    console.log(movie);
    if (play) {
      setPlay("");
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
          setPlay(response.data.results[0]?.key);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    handleOpen();
  };
  const [need, setneed] = useState(false);

  const ClickInfo = (movie) => {
    need ? setneed(false) : setneed(true);
    if (need) {
      setneed("");
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
          setneed(response.data.results[0]?.key);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    {
      need ? handleOpens() : handleClose();
    }
    return need;
  };

  return (
    <>
      <div
        className=" relative h-[370px] text-white object-contain  "
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${
            movie?.backdrop_path || movie?.poster_path
          }")`,
          backgroundPosition: "center center",

          backgroundSize: "cover",
        }}
      >
        <div className="ml-[30px] py-[140px] h-[300px]">
          <h1 className="text-[2.5rem] font-extrabold pb-[0.3rem]">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div>
            <button
              onClick={() => ClickPlay(movie)}
              className="px-[1.7rem] mr-[1rem] rounded-[0.2vw] font-bold  border-n
             text-[#fff] py-[0.4rem] bg-ts-1 hover:bg-[#e6e6e6] hover:text-black transition-all duration-[0.2s]  "
            >
              Play
            </button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <YouTube videoId={play} opts={opts} className="" />
              </Box>
            </Modal>
            <button
              onClick={handleOpens}
              className="px-[1.7rem] mr-[1rem] rounded-[0.2vw] font-bold  border-n
             text-[#fff] bg-ts-1 py-[0.4rem] hover:bg-[#e6e6e6] hover:text-black transition-all duration-[0.2s] "
            >
              Info
            </button>
            <Modal
              open={opens}
              onClose={handleCloses}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={info} className="overflow-scroll scrollbar-none">
                {need ? (
                  <YouTube videoId={need} opts={optss} className="" />
                ) : (
                  <img
                    className="h-[300px] zero:h-[221px]  object-center w-[100%]  object-contain"
                    src={`https://image.tmdb.org/t/p/original/${
                      movie?.backdrop_path || movie?.poster_path
                    }`}
                    alt={movie?.title || movie?.name || movie?.original_name}
                  />
                )}

                <div className="p-[20px] bg-[#161a1e] text-white">
                  <div className=" flex items-center justify-between ">
                    <h1 className="font-bold text-[1.6rem] w-[70%] ">
                      {movie?.title || movie?.name || movie?.original_name}
                    </h1>
                    <button
                      onClick={() => ClickInfo(movie)}
                      className={` mx-4  ${
                        need
                          ? "hidden"
                          : "  hover:scale-105 hover:ease-out hover:text-[1rem]  transition-all duration-300"
                      }  `}
                    >
                      <PlayCircleOutlineRoundedIcon sx={{ fontSize: "2rem" }} />
                    </button>
                  </div>
                  <div className="flex items-center my-4    justify-between">
                    <p className="text-[1.2rem] zero:text-xs font-bold bg-[#2d353d] rounded-lg px-2 ">
                      {movie?.vote_average}
                    </p>
                    <p className="text-[1.2rem]  zero:text-xsfont-bold bg-[#2d353d] rounded-lg px-2">
                      {movie?.vote_count}
                    </p>
                    <p className="text-[1.2rem] zero:text-xs font-bold bg-[#2d353d] rounded-lg px-2">
                      {movie?.original_language}
                    </p>
                    <p className="text-[1.2rem] zero:text-xs font-bold bg-[#2d353d] rounded-lg px-2">
                      {movie?.popularity}
                    </p>
                    <p className="text-[1.2rem] zero:text-xs font-bold bg-[#2d353d] rounded-lg px-2">
                      {movie?.adult ? "18+" : "13+"}
                    </p>
                    <p className="bg-[#2d353d] rounded-lg px-2 font-bold ">
                      {movie?.first_air_date ||
                        movie?.release_date ||
                        movie?.original_name}
                    </p>
                  </div>

                  <p className="text-[1.2rem] font-bold">
                    {movie?.original_title}
                  </p>
                  <p>{movie?.overview}</p>
                </div>
              </Box>
            </Modal>
          </div>
          <div className="w-[45rem] leading-[1.3] pt-[1rem] text-[0.8rem] max-w-[360px] h-[50px]">
            {truncate(movie?.overview, 150)}
          </div>
        </div>

        <div className="Fa--fade" />
      </div>
    </>
  );
}

export default Banner;
