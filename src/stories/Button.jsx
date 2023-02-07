import React from "react";
import PropTypes from "prop-types";
import "./button.css";

/**
 버튼 UI
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /** 제출버튼   */
  primary: PropTypes.bool,
  /** 배경색 선택 */
  backgroundColor: PropTypes.string,
  /** 크기 선택  */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /** 버튼텍스트 입력 */
  label: PropTypes.string.isRequired,
  /** 클릭이벤트 */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
