import React from "react"

function Pickup( { stroke, width } ){
  return(
    <svg
      fill="none"
      stroke={stroke}
      width={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 126.23 49.89">
        <path d="M310,93.29h15.77V77.15A5.23,5.23,0,0,0,321.5,72l-31.24-5.78L269.77,54.76h-23.7L244,67V93.29h47.25" transform="translate(-200.55 -53.76)"/>
        <polyline points="37.67 39.53 43.47 39.53 43.47 13.22 1 13.22 1 30.16 9.55 39.53 18.95 39.53"/>
        <circle cx="28.31" cy="39.53" r="9.37"/>
        <path d="M231.83,93.29a3,3,0,1,1-3-3A3,3,0,0,1,231.83,93.29Z" transform="translate(-200.55 -53.76)"/>
        <circle cx="100.09" cy="39.53" r="9.37"/>
        <circle cx="100.09" cy="39.53" r="2.96"/>
        <polyline points="74.66 4.04 49.24 4.04 51.41 12.46 89.71 12.46 89.71 39.53"/>
        <line x1="51.41" y1="12.46" x2="51.41" y2="39.53"/>
        <line x1="105.49" y1="31.87" x2="125.23" y2="31.87"/>
        <path d="M317.23,77.16a5,5,0,0,0,5,5h3.5v-5Z" transform="translate(-200.55 -53.76)"/>
        <line x1="54.53" y1="17.13" x2="59.18" y2="17.13"/>
        <line x1="89.71" y1="30.16" x2="1" y2="30.16"/>
        <polyline points="39.68 13.22 41.86 1.41 38.67 1.41 35.77 13.22"/>
        <rect x="1" y="16.48" width="3.36" height="9.89"/>
      </svg>
    )
}

export default Pickup