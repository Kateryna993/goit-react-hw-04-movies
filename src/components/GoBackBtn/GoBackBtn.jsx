import React from 'react';
import PropTypes from 'prop-types';
import style from './GoBackBtn.module.css';

export default function returnButton({ onClick }) {
  return (
    <div className={style.ReturnBtnContainer}>
      <button className={style.ReturnButton} type="button" onClick={onClick}>
        <span>&#8592;</span> Go back
      </button>
    </div>
  );
}

returnButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
