import React, { useEffect } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar' 
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import 'moment/locale/ko'
// import { color } from "@mui/system";
// import Popover from '@mui/material/Popover'

import CalendarHeader from "./CalendarHeader";


// https://mui.com/material-ui/react-autocomplete/#checkboxes
const BigCalendar = () => {
  const localizer = momentLocalizer(moment)

  const [date, setDate] = React.useState(new Date());

  const eventType = [
    '휴가',
    '회의',
    '출장',
    '파견',
  ]
  
  const events = [
    {
      title: "우현 " + eventType[1],
      allDay: false,
      start: new Date(2022, 11, 20, 10, 0), // 10.00 AM
      end: new Date(2022, 11, 22, 10, 30), // 2.00 PM
      backgroundColor: '#F87474',
      color: 'white'
    },
    {
      title: "경나 " + eventType[0],
      allDay: true,
      start: new Date(2022, 11, 19, 10, 0), // 10.00 AM
      end: new Date(2022, 11, 22, 10, 30), // 2.00 PM
      backgroundColor: '#3AB0FF',
      color: 'white'
    },
    {
      title: "상우 " + eventType[2],
      allDay: true,
      start: new Date(2022, 11, 23, 17, 30), // 10.00 AM
      end: new Date(2022, 11, 23, 17, 40), // 2.00 PM
      backgroundColor: '#FFB562',
      color: 'black'
    },    
    {
      title: "현민 " + eventType[3],
      allDay: true,
      start: new Date(2022, 11, 12, 17, 30), // 10.00 AM
      end: new Date(2022, 11, 14, 17, 40), // 2.00 PM
      backgroundColor: '#007E79',
      color: 'white'
    },
    {
      title: "현민 " + eventType[3],
      allDay: true,
      start: new Date(2022, 11, 21, 17, 30), // 10.00 AM
      end: new Date(2022, 11, 21, 17, 40), // 2.00 PM
      backgroundColor: '#007E79',
      color: 'white'
    },
    {
      title: "상우 " + eventType[3],
      allDay: true,
      start: new Date(2022, 11, 21, 17, 30), // 10.00 AM
      end: new Date(2022, 11, 21, 17, 40), // 2.00 PM
      backgroundColor: '#007E79',
      color: 'white'
    },
    {
      title: "우현 " + eventType[3],
      allDay: true,
      start: new Date(2022, 11, 21, 17, 30), // 10.00 AM
      end: new Date(2022, 11, 21, 17, 40), // 2.00 PM
      backgroundColor: '#007E79',
      color: 'white'
    },
    {
      title: "우현 " + eventType[3],
      allDay: true,
      start: new Date(2022, 11, 21, 17, 30), // 10.00 AM
      end: new Date(2022, 11, 21, 17, 40), // 2.00 PM
      backgroundColor: '#007E79',
      color: 'white'
    },
  ]

  const onNavigate = React.useCallback((newDate) => {
    setDate(newDate);
  }, [setDate]);

  const clickRef = React.useRef(null);
  useEffect(() => {
    return () => {
      window.clearTimeout(clickRef?.current);
    }
  }, []);

  const onSelectEvent = React.useCallback((calEvent) => {
    window.clearTimeout(clickRef?.current)
    clickRef.current = window.setTimeout(() => {
      console.log(calEvent, 'onSelectEvent')
    }, 250)
  }, []);

  return (
    <Calendar 
      localizer={localizer}
      style={{ margin: '2em'}}
      events={events}
      eventPropGetter={ event => {
        const backgroundColor = event.backgroundColor
        const color = event.color
        return { style: { backgroundColor, color } }
      }}
      startAccessor='start'
      endAccessor='end'
      defaultDate={new Date()}
      date={date}
      onNavigate={onNavigate}
      onSelectEvent={onSelectEvent}
      components={{
        toolbar: CalendarHeader,
      }}
      views={{
        month: true
      }}
      popup
    />
)};

export default BigCalendar;