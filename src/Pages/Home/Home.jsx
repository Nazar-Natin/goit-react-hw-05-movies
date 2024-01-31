import { fetchTrend } from 'service/api';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchTrend()
      .then(({ results }) => setMovies(results))
      .catch();
  }, []);

  const listMovies = movies.map(({ id, title, poster_path }) => (
    <li key={id}>
      <NavLink to={`/movies/${id}`} state={location}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            width={300}
          />
          <p>{title}</p>
        </div>
      </NavLink>
    </li>
  ));

  return (
    <div className="container">
      <h1>Trending today</h1>
      <ul>{listMovies}</ul>
    </div>
  );
};

export default Home;
