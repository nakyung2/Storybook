import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

export default function Input({ id, label, placeholder, readonly, disabled, error, ...others }) {
    return (
        <div>
          <label className="input-label" htmlFor={id}>{label}</label>
          <input
           className="input-text"
            id={id}
            type='text'
            placeholder={placeholder}
            readOnly={readonly}
            disabled={disabled}
            {...others}
          />
          {error && <div class='input-error'>{error}</div>}
        </div>
      );
}

// const Input = React.forwardRef(function Input(
//   { id, label, placeholder, readonly, disabled, error, ...others },
//   ref
// ) {
//   return (
//     <div>
//       <label htmlFor={id}>{label}</label>
//       <input
//         id={id}
//         type='text'
//         placeholder={placeholder}
//         readOnly={readonly}
//         disabled={disabled}
//         {...others}
//         ref={ref}
//       />
//       {error && <div class='error'>{error}</div>}
//     </div>
//   );
// });

// export default Input;

Input.propTypes = {
  /** 아이디* */
  id: PropTypes.string.isRequired,
  /** 레이블* */
  label: PropTypes.string.isRequired,
  /** 플레이스홀더 */
  placeholder: PropTypes.string,
  /** 읽기전용 상태 */
  readonly: PropTypes.bool,
  /** 비활성 상태 */
  disabled: PropTypes.bool,
  /** 에러 메시지 */
  error: PropTypes.string
};

Input.defaultProps = {
    id: 'none',
    label:"input",
    disabled: false,
  };
  