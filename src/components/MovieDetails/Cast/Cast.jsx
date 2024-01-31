import { fetchCast } from 'service/api';
import { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [actorInfo, setActorInfo] = useState([]);
  useEffect(() => {
    fetchCast(movieId)
      .then(data => {
        setActorInfo(data.cast.slice(0, 10));
      })
      .catch(error => console.error(error));
  }, [movieId]);

  const elements = actorInfo.map(actor => (
    <li key={actor.id}>
      <img
        loading="lazy"
        src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
        alt={actor.name}
        width={150}
      />
      <h3>{actor.name}</h3>
      <p>Character:{actor.character}</p>
    </li>
  ));

  return (
    <Suspense>
      <ul>{elements}</ul>
    </Suspense>
  );
};

export default Cast;
