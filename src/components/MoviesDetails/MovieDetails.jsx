import noMoviePoster from '../../images/no-poster.png';
import style from './MoviesDetails.module.css';

export default function MovieDetails({ movie }) {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;

  return (
    <>
      <div className={style.MovieCard}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300/${poster_path}`
              : noMoviePoster
          }
          alt={`${title} poster`}
        />
        <div className={style.MovieCardDescription}>
          <h1 className={style.MovieCardTitle}>{title}</h1>
          <p className={style.MovieReleaseDate}>
            <span>Release date:</span>{' '}
            {release_date && <span>{release_date}</span>}
          </p>
          <p className={style.MovieRating}>
            <span>Rating:</span> {vote_average}
          </p>
          <h2 className={style.OverviewTitle}>Overview</h2>
          <p className={style.OverviewInfo}>{overview}</p>
          <h2 className={style.GenresTitle}>Genres:</h2>
          <ul className={style.GenresList}>
            {genres.map(({ id, name }) => (
              <li className={style.GenresListItem} key={id}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
