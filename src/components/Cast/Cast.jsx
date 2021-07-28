import noPhoto from '../../images/no-photo.png';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as moviesApi from '../../services/MoviesApi';
import toast from 'react-hot-toast';
import style from './Cast.module.css';

export default function CastReview() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  // console.log(movieId);

  useEffect(() => {
    moviesApi
      .FetchMovieCast(movieId)
      .then(data => {
        // console.log(data);
        if (data.cast === 0) {
          toast.error('No cast to be found!');
        }
        setCast(data.cast);
      })
      .catch(error => error);
  }, [movieId]);

  return (
    <div className={style.castWrapper}>
      {cast && (
        <ul className={style.cardsContainer}>
          {cast.map(({ id, profile_path, name, character }) => (
            <li className={style.castCardElem} key={id}>
              <img
                className={style.castCardImg}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                    : noPhoto
                }
                alt={`actor ${name} shown`}
              />
              <div className={style.castCardText}>
                <p className={style.actorName}>{name}</p>
                <p className={style.actorCharacter}>{character}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
