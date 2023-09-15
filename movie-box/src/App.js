import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import MovieDetail from './Components/MovieDetail';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
              <Route path='/' element={<Homepage />}></Route>
              <Route path="/movies/:movieId" element={<MovieDetail />} />
          </Routes>
    </Router>
    </div>
  );
}

export default App;
