import React, { useEffect, useState } from "react";
import { fetchMovieDetails } from "./api";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./Styles/MovieDetail.css";

const MovieDetail = () => {
const apiKey = "d32887614372de0e302f4cb7777fead8";

const dateString = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const { movieId } = useParams();

const[movieDetail, setMovieDetail] = useState(null);
const getDetails = async()=>{
const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
setMovieDetail(response.data)
console.log(response.data)
}
useEffect(()=>{
     getDetails();
}, [])


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
            src="/assets/images/Calendar.png"
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
        {/* <img className='Rectangle29'  src='/assets/images/Rectangle 29.png' alt='Rectangle29' /> */}
        {movieDetail && movieDetail.poster_path ? (
          <img
            className="Rectangle29"
            src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
            alt="Movie Poster"
          />
            ) : (
            <p>No poster available</p>
            )}

                    <div className="BelowTrailer">
                    <div>
                    {movieDetail && movieDetail.title ? (
                <div>
                <div className="ActionDramaDiv">
                <div className="3span">
                <p className="ActionDramaP">
              <span>{movieDetail.title}</span>
              <span>{dateString(movieDetail.release_date)}</span>
              <span>{movieDetail.runtime}</span>
              </p>
                </div>

              <div className="ActionDrama">
              <button className="Action">Action</button>
              <button className="Drama">Drama</button>
              </div>

            </div>
            <div className="LongText">
            <span>{movieDetail.overview}</span>
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
                ) : (
                <p>Loading...</p>
                )}
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

        <div className="BelowTrailer2">
                {movieDetail && movieDetail.title ? (
                <div>
                <div className="ActionDramaDiv2">
                <div className="3span2">
                <p className="ActionDramaP2">
              <span className="spanA">{movieDetail.title}</span>
              <span className="spanB">{dateString(movieDetail.release_date)}</span>
              <span className="spanC">{movieDetail.runtime}</span>
              </p>
                </div>

              <div className="ActionDrama2">
              <button className="Action2">Action</button>
              <button className="Drama2">Drama</button>
              </div>

            </div>
            <div className="LongText2">
            <span>{movieDetail.overview}</span>
            </div>
            <div className="PSpan2">
              <p>
                Director : <span className="span2">Joseph Kosinski</span>
              </p>
              <p>
                Writers :{" "}
                <span className="span2">
                  Jim Cash, Jack Epps Jr, Peter Craig
                </span>
              </p>
              <p>
                Stars :{" "}
                <span className="span2">
                  Tom Cruise, Jennifer Connelly, Miles Teller
                </span>
              </p>
            </div>
            <div className="buttonAward2">
              <button className="TopButton2">Top Rated Movie #65</button>
              <p className="buttonAwardP2">Award 9 nominations</p>
            </div>
                
                </div>
                ) : (
                <p>Loading...</p>
                )}
          </div>

        {/* <div className="BelowTrailer2">
          <div className="ActionDramaDiv2">
            <p className="ActionDramaP2">
            <span>{movieDetail.title}</span>
              <span>{dateString(movieDetail.release_date)}</span>
              <span>{movieDetail.runtime}</span>
            </p>
            <div>
            <button className="Action2">Action</button>
            <button className="Drama2">Drama</button>
            </div>

          </div>
          <div className="LongText2">
          <span>{movieDetail.overview}</span>
          </div>
          <div className="PSpan2">
            <p>
              Director : <span className="span2">Joseph Kosinski</span>
            </p>
            <p>
              Writers :{" "}
              <span className="span2">Jim Cash, Jack Epps Jr, Peter Craig</span>
            </p>
            <p>
              Stars :{" "}
              <span className="span2">
                Tom Cruise, Jennifer Connelly, Miles Teller
              </span>
            </p>
          </div>
          <div className="buttonAward2">
            <button className="TopButton2">Top Rated Movie #65</button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MovieDetail;
