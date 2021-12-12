const CalendarIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={props.className}
    fill={props.fill}
  >
    <g data-name="Layer 2">
      <g data-name="calendar">
        <rect width="24" height="24" opacity="0" />
        <path d="M18 4h-1V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zM6 6h1v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h1a1 1 0 0 1 1 1v4H5V7a1 1 0 0 1 1-1zm12 14H6a1 1 0 0 1-1-1v-6h14v6a1 1 0 0 1-1 1z" />
        <circle cx="8" cy="16" r="1" />
        <path d="M16 15h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z" />
      </g>
    </g>
  </svg>
);

export default CalendarIcon;