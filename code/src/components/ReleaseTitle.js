import React from 'react'

export const ReleaseTitle = (props) => {
  return ( 
    <a href={props.albumURL} className='title'>
      {props.albumName}
    </a>
)}