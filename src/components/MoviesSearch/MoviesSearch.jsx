import { useState } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import style from './MoviesSearch.module.css';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      toast.error('Enter keyword to seach images!');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <div>
      <header className={style.Searchbar}>
        <form onSubmit={handleSubmit} className={style.SearchForm}>
          <button type="submit" className={style.SearchFormButton}>
            <span className={style.SearchFormBtnlabel}>Search</span>
          </button>

          <input
            onChange={handleChange}
            value={query}
            className={style.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
        </form>
      </header>
    </div>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
