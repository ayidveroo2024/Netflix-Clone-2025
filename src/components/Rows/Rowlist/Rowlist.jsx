import React from "react";
import Row from "../Row/Row";
import request from "../../../utils/request";

const Rowlist = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
      <Row title="Sci-Fi Movies" fetchUrl={request.fetchSciFiMovies} />
      <Row title="TV Shows" fetchUrl={request.fetchTvShows} />
    </>
  );
};

export default Rowlist;
