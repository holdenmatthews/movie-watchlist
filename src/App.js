import { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import Header from "./components/Header";
import MovieScreen from "./components/MovieScreen";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [page, setPage] = useState(1);

const getData = () => {
  axios.get(
      `https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
    )
    .then((res) => {
      console.log(res.data);
      setMovieList(res.data);
    });
};
  
  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen 
        movieList={movieList}
        page={page}
        setPage={setPage}
        watchlist={watchlist}
        />
      </main>
    </div>
  );
}

export default App;
