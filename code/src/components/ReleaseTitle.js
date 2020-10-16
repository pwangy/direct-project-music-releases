import React from 'react'

//Album title and its URL
export const ReleaseTitle = (props) => {
  return ( 
    <a href={props.albumURL} className='title'>
      {props.albumName}
    </a>
)}