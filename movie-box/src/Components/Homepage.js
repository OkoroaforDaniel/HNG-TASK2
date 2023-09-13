import React, {useState, useEffect} from 'react';
import {fetchMovies, searchMoviesByTitle} from './api';
// import tv from './assets/tv.png';
// import Menu from './assets/Menu (1).png';
// import Search from './assets/Search (1).png';
// import IMDb from './assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png';
// import Play from './assets/Play.png';
// import PngItem from './assets/PngItem_1381056 1.png';
// import Rectangle from './assets/Rectangle 1.png';
// import Icon from './assets/Icon (1).png';
// import facebook from './assets/fa-brands_facebook-square.png';
// import instagram from './assets/Vector.png';
// import x from './assets/fa-brands_twitter.png';
// import youTube from './assets/fa-brands_youtube.png';

import './Styles/Homepage.css';
import { Link } from 'react-router-dom';

const Homepage = () => {

    const [Movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = (newQuery) => {
      // Set the query in the state immediately
      setQuery(newQuery);
  
      // Start searching when the query is not empty
      if (newQuery.trim() !== '') {
        setLoading(true);
  
        searchMoviesByTitle(newQuery)
          .then((results) => {
            setSearchResults(results);
            setLoading(false);
          })
          .catch((error) => {
            console.error(error);
            setLoading(false);
          });
      } else {
        // Clear the results if the query is empty
        setSearchResults([]);
      }
    };

    useEffect(() => {
      // Fetch top movies when the component mounts
      fetchMovies()
        .then((movies) => {
            const top10Movies = movies.slice(0, 10);
            setMovies(top10Movies);
        })
        .catch((error) => console.error(error));
    }, []);

  return (
    <div>
        <header className='background-container'>

        <nav className='NavBar'>
            <div className='tvMovie'>
                <img className='tv' src='/assets/images/tv.png' alt='tv' />
                <p>MovieBox</p>
            </div>

            <div>
                <input 
                className='SearchInput' 
                placeholder='What do you want to watch?'
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                type='text'
                />
                <img className='SearchIcon' onClick={handleSearch} src='/assets/images/Search (1).png' alt='Search' />
                <div className='SearchList'>
                    {loading ? (
                        <p>Loading ...</p>
                    ): (
                    searchResults.map((movie) => (
                    <p key={movie.id}>{movie.title}</p>
                    ))
                    )}
                </div>
            </div>

            <div className='signMenu'>
                <p>Sign in</p>
                <img className='Menu' src='/assets/images/Menu (1).png' alt='Menu' />
            </div>
            
        </nav>

        <div className='TextRectangle'>
            <div className='DescriptionBox'>
                <div className='JohnWickH1'>
                <h1>
                John Wick 3 :<br /> Parabellum  
                </h1>
                </div>
    
            <div className='IMDbP-PngP'>
                <div className='IMDbP'>
                    <img src='/assets/images/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png' alt='IMDb' />
                    <p>86.0 / 100</p>
                </div>
                <div className='PngP'>
                    <img src='/assets/images/PngItem_1381056 1.png' alt='PngItem' />
                    <p>97%</p>
                </div>
            </div>
            <div className='JohnText'>
                <p>
                    John Wick is on the run after killing a member <br />
                    of the international assassins guide, and with<br/> 
                    a $14 million price tag on his head he is the<br /> 
                    tagert of hit men and women everywhere.
                </p>
            </div>
            <div className='playWatch'>
                <img className='Play' src='/assets/images/Play.png' alt='Play' />
                <button className='watchButton'>WATCH TRAILER</button>
            </div>
            </div>
            <div className='RectangleP'>
            <div>
            <img className='Rectangle' src='/assets/images/Rectangle 1.png' alt='Rectangle' />
            </div>
    
                <div className='p'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                </div>
            </div>

        </div>


        </header>

        <div className='FeatureContainer'>
            <div className='FeaturedSee'>
                <h2>Featured Movie</h2>
                <div className='moreIcon'>
                    <a href='#'>See more</a>
                    <img src='/assets/images/Icon (1).png' alt='Icon' />
                </div>
            </div>

            <div class="container">
                    {Movies.map((movie)=>( 
                        <Link className='LinkDiv' to="/movies/${movie.id}" key={movie.id}>
                        <div class="item" data-testid='movie-card'>                      
                        <img className='posterImg' data-testid='movie-poster' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                            <p className='Date' data-testid='movie-release-date'>{movie.release_date}</p>
                            <h2 className='Title' data-testid='movie-title'>{movie.title}</h2>

                            <div className='IMDbP-Png-Card' id='IMDbP-PngP-Card'>
                            <div className='IMDbP-Card'>
                                <img src='/assets/images/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png' alt='IMDb' />
                                <p>86.0 / 100</p>
                            </div>
                            <div className='PngP-Card'>
                                <img src='/assets/images/PngItem_1381056 1.png' alt='PngItem' />
                                <p>97%</p>
                            </div>
                            </div>
                            <p className='Type'>Action, Adventure, Horror</p>
                        </div>
                        </Link> 
                    ))}
            </div>
        </div>
        <footer>
                <div className='FIXY'>
                    <img src='/assets/images/fa-brands_facebook-square.png' alt='facebook' />
                    <img className='instagram' src='/assets/images/Vector.png' alt='instagram' />
                    <img className='x' src='/assets/images/fa-brands_twitter.png' alt='x' />
                    <img className='youTube' src='/assets/images/fa-brands_youtube.png' alt='youTube' />
                </div>
                
                <div className='CPP'>
                    <p>Conditions of Use</p>
                    <p className='privacy'>Privacy & Policy</p>
                    <p className='press'>Press Room</p>
                </div>
                <p className='copywrite'>© 2021 MovieBox by Adriana Eka Prayudha </p>
            </footer>
    </div>
  )
}

export default Homepage