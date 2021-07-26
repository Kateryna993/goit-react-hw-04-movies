import React from 'react';
import PropTypes from 'prop-types';

export default function MoviesItem({ title, imgUrl, date }) {
  return (
    <>
      <div>
        <img src={imgUrl} alt={title} />
      </div>
      <div>
        <p>{title}</p>
        <p>{date}</p>
      </div>
    </>
  );
}

MoviesItem.propTypes = {
  title: PropTypes.string,
  imgUrl: PropTypes.string,
  date: PropTypes.string,
};
