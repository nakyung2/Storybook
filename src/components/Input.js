import React from 'react';
import { string, bool } from 'prop-types';
import './Input.css';

const Input = React.forwardRef(function Input(
  { id, label, placeholder, readonly, disabled, error, ...others },
  ref
) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type='text'
        placeholder={placeholder}
        readOnly={readonly}
        disabled={disabled}
        {...others}
        ref={ref}
      />
      {error && <div class='error'>{error}</div>}
    </div>
  );
});

export default Input;

Input.propTypes = {
  /** 아이디* */
  id: string.isRequired,
  /** 레이블* */
  label: string.isRequired,
  /** 플레이스홀더 */
  placeholder: string,
  /** 읽기전용 상태 */
  readonly: bool,
  /** 비활성 상태 */
  disabled: bool,
  /** 에러 메시지 */
  error: string
};