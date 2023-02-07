import React from "react";
import PropTypes from "prop-types";
// import './Task.css'

export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
        <span
          className="checkbox-custom"
          onClick={() => onArchiveTask(id)}
          id={`archiveTask-${id}`}
          aria-label={`archiveTask-${id}`}
        />
      </label>
      <div className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          placeholder="Input title"
        />
      </div>

      {/* e.stopPropagation 이벤트의 상위 전달 막기 => e.preventDefault 이벤트 동작 막기  */}
      <div className="actions" onClick={(event) => event.stopPropagation()}>
        {state !== "TASK_ARCHIVED" && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(id)}>
            <span
              className={`icon-star`}
              id={`pinTask-${id}`}
              aria-label={`pinTask-${id}`}
            />
          </a>
        )}
      </div>
    </div>
  );
}

// 데이터 요구 사항 명시하기
// 컴포넌트에 필요한 데이터 형태 명시
// 문서화, 문제 조기 발견에 용이
Task.propTypes = {
  /** task */
  task: PropTypes.shape({
    /** 아이디 */
    id: PropTypes.string.isRequired,
    /** 제목 */
    title: PropTypes.string.isRequired,
    /** 상태 */
    state: PropTypes.string.isRequired,
  }),
  /** 완료 여부 */
  onArchiveTask: PropTypes.func,
  /** 중요 여부 */
  onPinTask: PropTypes.func,
};
