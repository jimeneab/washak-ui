import React from "react"

function Hatchback( { stroke,width } ){
  return(
    <svg
      fill="none"
      stroke={stroke}
      width={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 128.31 47">
        <path d="M158.06,391.93h18.58V383l-8.53-8a14.75,14.75,0,0,0-10.05-3.95H131l-11.34-12.43a10.43,10.43,0,0,0-9-3.33c-14.11,1.75-50.78,8-50.78,26.18v7.4a3,3,0,0,0,3,3h5.27" transform="translate(-49.33 -354.24)" />
        <line x1="37.66" y1="37.69" x2="89.76" y2="37.69" />
        <circle cx="99.24" cy="36.51" r="9.49"/>
        <path d="M151.58,390.75a3,3,0,1,1-3-3A3,3,0,0,1,151.58,390.75Z" transform="translate(-49.33 -354.24)"/>
        <circle cx="28.26" cy="36.51" r="9.49"/>
        <path d="M80.59,390.75a3,3,0,1,1-3-3A3,3,0,0,1,80.59,390.75Z" transform="translate(-49.33 -354.24)"/>
        <path d="M131,391.93V371.08H80.39l-2.8-3.92s20.06-9.35,42.08-8.51" transform="translate(-49.33 -354.24)"/>
        <line x1="45.96" y1="7.53" x2="45.96" y2="37.69"/>
        <line x1="49.05" y1="19.93" x2="52.15" y2="19.93"/>
        <path d="M158.06,371.08s2.55,5.11,11.28,5.11" transform="translate(-49.33 -354.24)"/>
        <path d="M62.11,374.17s-2-5.62-11.78-5.62v-2.19H71" transform="translate(-49.33 -354.24)"/>
        <path d="M176.64,383h-8.12a6.21,6.21,0,0,0-6.2,6.2v2.74" transform="translate(-49.33 -354.24)"/>
        <path d="M59.88,383.62h4.73a3,3,0,0,1,3,3v5.29" transform="translate(-49.33 -354.24)"/>
       </svg>
    )
}

export default Hatchback