import React from "react";

function LocationLogo() {
  return (
    <div>
      <svg
        className="location-svg"
        height="48"
        viewBox="0 0 48 48"
        width="48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="xyz"
          d="M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
        />
        <path d="M0 0h48v48h-48z" fill="none" />
      </svg>
    </div>
  );
}

export default LocationLogo;
