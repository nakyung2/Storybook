import CreateSchedule from "./CreateSchedule"

export default function CalendarHeader(props) {
  const {
    date,
  } = props

  const navigate = action => {
    props.onNavigate(action)
  }

  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group">
        <button 
          type="button" 
          onClick={navigate.bind(null, 'TODAY')}
          className="defaultbtn"
        >
          오늘
        </button>
        <button
          type="button"
          onClick={navigate.bind(null, 'PREV')}
          className="nextp-btn"
        >
          이전
        </button>
        <span className="rbc-toolbar-label">{`${date.getFullYear()}년 ${date.getMonth() + 1}월`}</span>
        <button
          type="button"
          onClick={navigate.bind(null, 'NEXT')}
          className="nextp-btn"
        >
          다음
        </button>
      </span>

      <CreateSchedule>
      </CreateSchedule>
    </div>
  )
}