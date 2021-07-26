import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import style from './Loader.module.css';

const Spinner = () => {
  return (
    <div className={style.LoaderContainer}>
      <Loader
        type="Circles"
        color="#7db5e9"
        height={90}
        width={90}
        timeout={5000}
      />
    </div>
  );
};

export default Spinner;
