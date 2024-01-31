import { fetchReview } from 'service/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [revInfo, setRevInfo] = useState([]);

  useEffect(() => {
    fetchReview(movieId)
      .then(data => setRevInfo(data.results))
      .catch(error => console.error(error));
  }, [movieId]);

  const elements = revInfo.map(({ author, content, id }) => (
    <li key={id}>
      <h3>Author: {author}</h3>
      <p>{content}</p>
    </li>
  ));

  return (
    <ul>
      {revInfo.length > 0
        ? elements
        : "We don't have ane reviewsfor this movie."}
    </ul>
  );
};

export default Reviews;
