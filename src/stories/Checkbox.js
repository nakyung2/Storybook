import React from "react";
import PropTypes from "prop-types";

export default function Checkbox({ id, state, label, disabled }) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name={id}
          defaultChecked={state === "checked"}
          disabled={disabled}
        />
        {label}
      </label>
    </div>
  );
}

Checkbox.propTypes = {
  // isRequired를 붙임으로써 반드시 입력되어야 하는 필수 prop으로 정의
  /** 아이디 */
  id: PropTypes.string.isRequired,
  /** 체크 여부 할당 */
  state: PropTypes.oneOf(["none", "checked"]).isRequired,
  /** 비활성화 여부 할당 */
  disabled: PropTypes.bool,
  /** 텍스트 입력 */
  label: PropTypes.string,
};

Checkbox.defaultProps = {
  state: "none",
  label: "체크박스",
  disabled: false,
};
