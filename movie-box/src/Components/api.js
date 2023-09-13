const apiKey = 'd32887614372de0e302f4cb7777fead8';

export const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
      );
      const data = await response.json();

      console.log(data);

      return data.results;
    } catch (error) {
      throw error;
    }
  };

export const searchMoviesByTitle = async (query) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieTrailers = async (movieId) => {
    try {
        const response =await fetch(
            `https://api.themoviedb.org/3/movie/movie_id/videos?api_key=${apiKey}&language=en-US`
        );
        const data = await response.json();

        console.log(data);

        return data.results;
    } catch (error) {
        throw error;
    }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};