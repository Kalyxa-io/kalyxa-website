import React from 'react';

const WeatherAdaptiveIcon = () => (
  <svg
    className="w-12 h-12"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 24C12 16.268 18.268 10 26 10C33.732 10 40 16.268 40 24"
      stroke="#A855F7"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M8 24C8 31.732 14.268 38 22 38H26"
      stroke="#A855F7"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle
      cx="24"
      cy="24"
      r="16"
      fill="#A855F7"
      fillOpacity="0.1"
    />
  </svg>
);

export default WeatherAdaptiveIcon;