import React, { useEffect, useState } from "react";

import "./Styles/MovieDetail.css";

import { fetchMovies, fetchMovieTrailers } from "./api";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailers, setTrailers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // Fetch movie details by ID
    fetchMovies(id)
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });

    // Fetch movie trailers by ID
    fetchMovieTrailers(id)
      .then((data) => {
        setTrailers(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (loading) {
    return <p>Loading movie details...</p>;
  }

  if (!movie) {
    return <p>Movie not found.</p>;
  }

  return (
    <div className="MovieBoxProjection">
      <div className="MovieBox">
        <div className="tv">
          <img src="/assets/images/tv.png" alt="tv" />
          <p>MovieBox</p>
        </div>
        <div className="Home">
          <img className="MovieIcon" src="/assets/images/Home.png" alt="Home" />
          <p className="MovieText">Home</p>
        </div>
        <div className="Movies">
          <img
            className="MovieIcon"
            src="/assets/images/Movie Projector.png"
            alt="MovieProjection"
          />
          <p className="MovieText">Movies</p>
        </div>
        <div className="TvSeries">
          <img
            className="MovieIcon"
            src="/assets/images/TV Show.png"
            alt="TvShow"
          />
          <p className="MovieText">TV Series</p>
        </div>
        <div className="Calander">
          <img
            className="MovieIcon"
            src="/assets/imagesCalendar.png"
            alt="Calander"
          />
          <p className="MovieText">Upcomming</p>
        </div>
        <div className="Text">
          <p>
            Play movie quizes
            <br />
            and earn
            <br />
            free tickets
            <br />
          </p>
          <p>
            50k people are playing
            <br />
            now
          </p>
        </div>
        <div className="LogOut">
          <img
            className="MovieIcon"
            src="/assets/images/Logout.png"
            alt="LogOut"
          />
          <p className="MovieText">Log Out</p>
        </div>
      </div>

      <div className="Pojection">
        {trailers && trailers.length > 0 && (
          <iframe
            className="Rectangle29"
            src={`https://www.youtube.com/embed/${trailers[0].key}`}
            title="Trailer"
            frameBorder="0"
            allowFullScreen
          />
        )}
        ;
        {/* <img className='Rectangle29' src={Rectangle29} alt='Rectangle29' /> */}
        <div className="BelowTrailer">
          <div>
            <div className="ActionDramaDiv">
              <p className="ActionDramaP">
                Top Gun: Maverick • 2022 • PG-13 • 2h 10m
              </p>
              <button className="Action">Action</button>
              <button className="Drama">Drama</button>
            </div>
            <div className="LongText">
              After thirty years, Maverick is still pushing the envelope as a
              top naval aviator,
              <br />
              but must confront ghosts of his past when he leads TOP GUN's elite
              graduates
              <br />
              on a mission that demands the ultimate sacrifice from those chosen
              to fly it.
            </div>
            <div className="PSpan">
              <p>
                Director : <span className="span">Joseph Kosinski</span>
              </p>
              <p>
                Writers :{" "}
                <span className="span">
                  Jim Cash, Jack Epps Jr, Peter Craig
                </span>
              </p>
              <p>
                Stars :{" "}
                <span className="span">
                  Tom Cruise, Jennifer Connelly, Miles Teller
                </span>
              </p>
            </div>
            <div className="buttonAward">
              <button className="TopButton">Top Rated Movie #65</button>
              <p className="buttonAwardP">Award 9 nominations</p>
            </div>
          </div>

          <div className="Rectangle37Div">
            <div className="starRate">
              <img src="/assets/images/Star.png" alt="star" />
              <span className="Rate">8.5</span>{" "}
              <span className="num"> | 350k</span>
            </div>
            <button className="showTime">See showtimes</button>
            <button className="Option">More Watch Options</button>
            <img src="/assets/images/Rectangle 37.png" alt="Rectangle37" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
