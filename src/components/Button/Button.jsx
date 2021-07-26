import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.css';

export default function buttonAction({ onClick }) {
  return (
    <div className={style.BtnContainer}>
      <button className={style.Button} type="button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
}

buttonAction.propTypes = {
  onClick: PropTypes.func.isRequired,
};

// class Button extends Component {
//   render() {
//     return (
//       <div className={style.BtnContainer}>
//         <button
//           className={style.Button}
//           type="button"
//           onClick={this.props.onClick}
//         >
//           Load more
//         </button>
//       </div>
//     );
//   }
// }

// export default Button;
