import { CALENDAR_VIEW } from '../../common/enums';
import { Context } from '../../context/store';
import { DateWeekDayProps } from './DateWeekDay.props';
import { parseCssDark } from '../../utils/common';
import { useContext } from 'react';
import LuxonHelper from '../../utils/luxonHelper';

const DateWeekDay = (props: DateWeekDayProps) => {
  const { width, day } = props;

  const [store, dispatch] = useContext(Context);
  const setContext = (type: string, payload: any) => {
    dispatch({ type, payload });
  };

  const { selectedView, callbacks } = store;

  const isDayToday: boolean = LuxonHelper.isToday(day);

  const isMonthView: boolean = selectedView === CALENDAR_VIEW.MONTH;

  const navigateToDay = (e: any) => {
    if (props.setViewChanged) {
      e.preventDefault();
      e.stopPropagation();

      props.setViewChanged(CALENDAR_VIEW.DAY);
      setContext('selectedDate', day);
      setContext('calendarDays', [day]);
    }
  };

  const handleNewEventClick = (event: any) => {
    if (callbacks.onNewEventClick) {
      callbacks.onNewEventClick(
        {
          day: day.toJSDate(),
          hour: day.toUTC().hour,
          startAt: day
            ?.setZone(store.config.timezone)
            .startOf('day')
            .toUTC()
            .toString(),
          endAt: day
            ?.setZone(store.config.timezone)
            .endOf('day')
            .toUTC()
            .toString(),
          event,
          view: selectedView,
        },
        event
      );
    }
  };

  const getBackgroundColor = () => {
    if (!store.isDark) {
      if (isDayToday) {
        return store.colors.light.primaryColor;
      }
    } else {
      if (isDayToday) {
        return store.colors.dark.primaryColor;
      }
    }
  };

  return (
    <div
      className={'Kalend__CalendarHeaderDates__col'}
      style={{ width, cursor: props.setViewChanged ? 'pointer' : 'normal' }}
      onClick={handleNewEventClick}
    >
      <div
        className={`${parseCssDark(
          `Kalend__CalendarHeaderDates__circle${isMonthView ? '-small' : ''}`,
          true
        )} ${isDayToday ? 'Kalend__CalendarHeaderDates__primary' : ''}`}
        onClick={navigateToDay}
        style={{
          background: getBackgroundColor(),
        }}
      >
        <p
          className={`Kalend__text Kalend__CalendarHeaderDates__text ${
            selectedView === CALENDAR_VIEW.MONTH
              ? 'Kalend__CalendarHeaderDates__text-size-small'
              : ''
          } ${
            isDayToday
              ? parseCssDark('Kalend__color-text-base', !store.isDark)
              : parseCssDark('Kalend__color-text-base', store.isDark)
          }`}
        >
          {day.day}
        </p>
      </div>
    </div>
  );
};

export default DateWeekDay;
