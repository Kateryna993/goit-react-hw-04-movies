import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as moviesApi from '../../services/MoviesApi';
import { FaUser } from 'react-icons/fa';
import style from './Reviews.module.css';

export default function ReviewsInfo() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    moviesApi
      .FetchMovieReviews(movieId)
      .then(data => {
        setReviews(data.results);
      })
      .catch(error => error);
  }, [movieId]);

  return (
    <div>
      {reviews.length === 0 ? (
        <p className={style.noReviews}>No reviews for this movie yet!</p>
      ) : (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>
                <span className={style.author}>
                  <FaUser className={style.authorIcon} />
                  Reviewer:&nbsp;
                </span>
                <span className={style.nickName}>{author}</span>
              </p>
              <p className={style.content}>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
