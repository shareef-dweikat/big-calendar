/* eslint-disable @typescript-eslint/no-unused-vars */
import { CALENDAR_VIEW, TIME_FORMAT, WEEKDAY_START } from './enums';

export interface Settings {
  selectedDate: string;
  selectedView: CALENDAR_VIEW;
  initialView: CALENDAR_VIEW;
  events: any;
  isDark?: boolean;
  hourHeight: number;
}

export interface CalendarEvent {
  id: any;
  startAt: string;
  endAt: string;
  timezoneStartAt: string;
  timezoneEndAt: string;
  summary: string;
  color: string;
  [key: string]: any;
}

export interface EventLayoutMeta {
  showTime: boolean;
  isFullWidth: boolean;
  centerText: boolean;
}

export interface NormalEventPosition {
  event: CalendarEvent;
  height: number;
  offsetTop: number;
  width: number;
  offsetLeft: number;
  zIndex: number;
  meta?: EventLayoutMeta;
  dateKey?: string;
}

export interface NewEventClickData {
  event: any;
  day: Date;
  hour: number;
}

export interface PageChangeData {
  rangeFrom: string;
  rangeTo: string;
}

export interface EventStyle {
  position: string;
  height: number;
  width: string | number;
  top: number;
  left: number;
  backgroundColor: string;
  transition?: string;
  zIndex?: number;
  border: string;
  alignItems?: string;
  visibility: string;
}

export interface EventLayout {
  offsetTop: number;
  offsetLeft: number;
  width: number | string;
  height: number;
  zIndex: number;
  border: string;
  meta: EventLayoutMeta;
}

export interface Config {
  timeFormat: TIME_FORMAT;
  weekDayStart: WEEKDAY_START;
  isDark: boolean;
  hourHeight: number;
  timezone: string;
  disableMobileDropdown: boolean;
  disabledViews?: CALENDAR_VIEW[];
}

// functions
export type OnPageChangeFunc = (data: PageChangeData) => void;
export type ShowMoreMonthFunc = (data: CalendarEvent[]) => void;
export type OnSelectViewFunc = (view: CALENDAR_VIEW) => void;
export type OnEventClickFunc = (data: CalendarEvent) => void;
export type OnEventDragFinishFunc = (
  updatedEvent: CalendarEvent,
  events: any
) => void;
export type OnNewEventClickFunc = (data: NewEventClickData) => void;

export interface Callbacks {
  onSelectView?: OnSelectViewFunc;
  showMoreMonth?: ShowMoreMonthFunc;
  onPageChange?: OnPageChangeFunc;
  onEventDragFinish?: OnEventDragFinishFunc;
  onNewEventClick: OnNewEventClickFunc;
  onEventClick: OnEventClickFunc;
}
