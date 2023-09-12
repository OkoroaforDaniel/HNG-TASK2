import React from 'react';
import tv from './assets/tv.png';
import Menu from './assets/Menu (1).png';
import Search from './assets/Search (1).png';
import IMDb from './assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png';
import Play from './assets/Play.png';
import PngItem from './assets/PngItem_1381056 1.png';
import Rectangle from './assets/Rectangle 1.png';
import Icon from './assets/Icon (1).png';
import Poster1 from './assets/Poster (2).png';
import Poster2 from './assets/Poster (3).png';
import Poster3 from './assets/Poster (4).png';
import Poster4 from './assets/Poster (5).png';
import Poster5 from './assets/Poster (6).png';
import Poster6 from './assets/Poster (7).png';
import Poster7 from './assets/Poster (8).png';
import Poster8 from './assets/Poster (9).png';
import Poster9 from './assets/Poster (10).png';
import Poster10 from './assets/Poster (11).png';
import Poster11 from './assets/Poster Image.png';
import Poster12 from './assets/Poster Image (1).png';
import facebook from './assets/fa-brands_facebook-square.png';
import instagram from './assets/Vector.png';
import x from './assets/fa-brands_twitter.png';
import youTube from './assets/fa-brands_youtube.png';

import './Styles/Homepage.css';

const Homepage = () => {
  return (
    <div>
        <header className='background-container'>

        <nav className='NavBar'>
            <div className='tvMovie'>
                <img className='tv' src={tv} alt='tv' />
                <p>MovieBox</p>
            </div>

            <div>
                <input className='SearchInput' placeholder='What do you want to watch?'/>
                <img className='SearchIcon' src={Search} alt='Search' />
            </div>

            <div className='signMenu'>
                <p>Sign in</p>
                <img className='Menu' src={Menu} alt='Menu' />
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
                    <img src={IMDb} alt='IMDb' />
                    <p>86.0 / 100</p>
                </div>
                <div className='PngP'>
                    <img src={PngItem} alt='PngItem' />
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
                <img className='Play' src={Play} alt='Play' />
                <button className='watchButton'>WATCH TRAILER</button>
            </div>
            </div>
            <div className='RectangleP'>
            <div>
            <img className='Rectangle' src={Rectangle} alt='Rectangle' />
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
                    <img src={Icon} alt='Icon' />
                </div>
            </div>

            {/* <div class="container"> */}

            <div class="container">
                <div class="item">
                    <img src={Poster1} alt='Postal' />
                    <p className='Date'>USA, 2016 - Current</p>
                    <h2 className='Title'>Stranger Things</h2>

                    <div className='IMDbP-Png-Card' id='IMDbP-PngP-Card'>
                    <div className='IMDbP-Card'>
                        <img src={IMDb} alt='IMDb' />
                        <p>86.0 / 100</p>
                    </div>
                    <div className='PngP-Card'>
                        <img src={PngItem} alt='PngItem' />
                        <p>97%</p>
                    </div>
                    </div>
                    <p className='Type'>Action, Adventure, Horror</p>
                </div>

                <div class="item">
                <img src={Poster2} alt='Postal' />
                    <p className='Date'>USA, 2016 - Current</p>
                    <h2 className='Title'>Stranger Things</h2>

                    <div className='IMDbP-Png-Card' id='IMDbP-PngP-Card'>
                    <div className='IMDbP-Card'>
                        <img src={IMDb} alt='IMDb' />
                        <p>86.0 / 100</p>
                    </div>
                    <div className='PngP-Card'>
                        <img src={PngItem} alt='PngItem' />
                        <p>97%</p>
                    </div>
                    </div>
                    <p className='Type'>Action, Adventure, Horror</p>
                </div>

                <div class="item">
                <img src={Poster3} alt='Postal' />
                    <p className='Date'>USA, 2016 - Current</p>
                    <h2 className='Title'>Stranger Things</h2>

                    <div className='IMDbP-Png-Card' id='IMDbP-PngP-Card'>
                    <div className='IMDbP-Card'>
                        <img src={IMDb} alt='IMDb' />
                        <p>86.0 / 100</p>
                    </div>
                    <div className='PngP-Card'>
                        <img src={PngItem} alt='PngItem' />
                        <p>97%</p>
                    </div>
                    </div>
                    <p className='Type'>Action, Adventure, Horror</p>
                </div>

                <div class="item">
                <img src={Poster4} alt='Postal' />
                    <p className='Date'>USA, 2016 - Current</p>
                    <h2 className='Title'>Stranger Things</h2>

                    <div className='IMDbP-Png-Card' id='IMDbP-PngP-Card'>
                    <div className='IMDbP-Card'>
                        <img src={IMDb} alt='IMDb' />
                        <p>86.0 / 100</p>
                    </div>
                    <div className='PngP-Card'>
                        <img src={PngItem} alt='PngItem' />
                        <p>97%</p>
                    </div>
                    </div>
                    <p className='Type'>Action, Adventure, Horror</p>
                </div>

                <div class="item">
                <img src={Poster5} alt='Postal' />
                    <p className='Date'>USA, 2016 - Current</p>
                    <h2 className='Title'>Stranger Things</h2>

                    <div className='IMDbP-Png-Card' id='IMDbP-PngP-Card'>
                    <div className='IMDbP-Card'>
                        <img src={IMDb} alt='IMDb' />
                        <p>86.0 / 100</p>
                    </div>
                    <div className='PngP-Card'>
                        <img src={PngItem} alt='PngItem' />
                        <p>97%</p>
                    </div>
                    </div>
                    <p className='Type'>Action, Adventure, Horror</p>
                </div>

                <div class="item">
                <img src={Poster6} alt='Postal' />
                    <p className='Date'>USA, 2016 - Current</p>
                    <h2 className='Title'>Stranger Things</h2>

                    <div className='IMDbP-Png-Card' id='IMDbP-PngP-Card'>
                    <div className='IMDbP-Card'>
                        <img src={IMDb} alt='IMDb' />
                        <p>86.0 / 100</p>
                    </div>
                    <div className='PngP-Card'>
                        <img src={PngItem} alt='PngItem' />
                        <p>97%</p>
                    </div>
                    </div>
                    <p className='Type'>Action, Adventure, Horror</p>
                </div>

                <div class="item">
                <img src={Poster7} alt='Postal' />
                    <p className='Date'>USA, 2016 - Current</p>
                    <h2 className='Title'>Stranger Things</h2>

                    <div className='IMDbP-Png-Card' id='IMDbP-PngP-Card'>
                    <div className='IMDbP-Card'>
                        <img src={IMDb} alt='IMDb' />
                        <p>86.0 / 100</p>
                    </div>
                    <div className='PngP-Card'>
                        <img src={PngItem} alt='PngItem' />
                        <p>97%</p>
                    </div>
                    </div>
                    <p className='Type'>Action, Adventure, Horror</p>
                </div>

                <div class="item">
                <img src={Poster8} alt='Postal' />
                    <p className='Date'>USA, 2016 - Current</p>
                    <h2 className='Title'>Stranger Things</h2>

                    <div className='IMDbP-Png-Card' id='IMDbP-PngP-Card'>
                    <div className='IMDbP-Card'>
                        <img src={IMDb} alt='IMDb' />
                        <p>86.0 / 100</p>
                    </div>
                    <div className='PngP-Card'>
                        <img src={PngItem} alt='PngItem' />
                        <p>97%</p>
                    </div>
                    </div>
                    <p className='Type'>Action, Adventure, Horror</p>
                </div>

                <div class="item">
                <img src={Poster9} alt='Postal' />
                    <p className='Date'>USA, 2016 - Current</p>
                    <h2 className='Title'>Stranger Things</h2>

                    <div className='IMDbP-Png-Card' id='IMDbP-PngP-Card'>
                    <div className='IMDbP-Card'>
                        <img src={IMDb} alt='IMDb' />
                        <p>86.0 / 100</p>
                    </div>
                    <div className='PngP-Card'>
                        <img src={PngItem} alt='PngItem' />
                        <p>97%</p>
                    </div>
                    </div>
                    <p className='Type'>Action, Adventure, Horror</p>
                </div>

                <div class="item">
                <img src={Poster10} alt='Postal' />
                    <p className='Date'>USA, 2016 - Current</p>
                    <h2 className='Title'>Stranger Things</h2>

                    <div className='IMDbP-Png-Card' id='IMDbP-PngP-Card'>
                    <div className='IMDbP-Card'>
                        <img src={IMDb} alt='IMDb' />
                        <p>86.0 / 100</p>
                    </div>
                    <div className='PngP-Card'>
                        <img src={PngItem} alt='PngItem' />
                        <p>97%</p>
                    </div>
                    </div>
                    <p className='Type'>Action, Adventure, Horror</p>
                </div>

                <div class="item">
                <img src={Poster11} alt='Postal' />
                    <p className='Date'>USA, 2016 - Current</p>
                    <h2 className='Title'>Stranger Things</h2>

                    <div className='IMDbP-Png-Card' id='IMDbP-PngP-Card'>
                    <div className='IMDbP-Card'>
                        <img src={IMDb} alt='IMDb' />
                        <p>86.0 / 100</p>
                    </div>
                    <div className='PngP-Card'>
                        <img src={PngItem} alt='PngItem' />
                        <p>97%</p>
                    </div>
                    </div>
                    <p className='Type'>Action, Adventure, Horror</p>
                </div>

                <div class="item">
                <img src={Poster12} alt='Postal' />
                    <p className='Date'>USA, 2016 - Current</p>
                    <h2 className='Title'>Stranger Things</h2>

                    <div className='IMDbP-Png-Card' id='IMDbP-PngP-Card'>
                    <div className='IMDbP-Card'>
                        <img src={IMDb} alt='IMDb' />
                        <p>86.0 / 100</p>
                    </div>
                    <div className='PngP-Card'>
                        <img src={PngItem} alt='PngItem' />
                        <p>97%</p>
                    </div>
                    </div>
                    <p className='Type'>Action, Adventure, Horror</p>
                </div>
            {/* </div> */}

            </div>
        </div>
        <footer>
                <div className='FIXY'>
                    <img src={facebook} alt='facebook' />
                    <img className='instagram' src={instagram} alt='instagram' />
                    <img className='x' src={x} alt='x' />
                    <img className='youTube' src={youTube} alt='youTube' />
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