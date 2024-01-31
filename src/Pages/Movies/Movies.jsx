import SearchForm from 'components/SearchForm/SearchForm';
import { fetchSearch } from 'service/api';
import { useEffect, useState } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const text = searchParams.get('querty') ?? '';
  const [movieList, setMovieList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (!text) return;
    fetchSearch(text)
      .then(data => setMovieList(data.results))
      .catch(error => console.error(error));
  }, [text]);

  const elements = movieList.map(
    ({ original_title, id, backdrop_path, poster_path, title }) =>
      backdrop_path && (
        <li key={id}>
          <NavLink to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
            />
            <p>{original_title}</p>
          </NavLink>
        </li>
      )
  );

  return (
    <div className="container">
      <SearchForm setSearchParams={setSearchParams} />
      <ul>{elements}</ul>
    </div>
  );
};

export default Movies;
