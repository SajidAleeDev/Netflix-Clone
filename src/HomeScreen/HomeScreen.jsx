import React, { useEffect, useState } from "react";
import "./HomeScreen.css";
import Nav from "./HomeComponent/Nav/Nav";
import Banner from "./HomeComponent/Banner/Banner";
import Request from "../Request";
import Row from "./HomeComponent/Rows/Row";

function HomeScreen() {
  return (
    <div className="HomeScreen">
      <Nav />
      <Banner />

      <Row
        title={"NETFLIX ORIGINALS"}
        FetchURL={Request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title={"Trending Now"} FetchURL={Request.fetchTrending} />

      <Row title={"Top Rated"} FetchURL={Request.fetchTopRated} />

      <Row title={"Action Movies"} FetchURL={Request.fetchActionMovies} />
      <Row title={"Comedy Movies"} FetchURL={Request.fetchComedyMovies} />
      <Row title={"Horror Movies"} FetchURL={Request.fetchHorroMovies} />
      <Row title={"Romance Movies"} FetchURL={Request.fetchRomanceMovies} />
      <Row title={"Documantaries"} FetchURL={Request.fetchDocumantaries} />
    </div>
  );
}

export default HomeScreen;
