import React from 'react'

export const AlbumTitle = (props) => {
  return ( 
    <a href={props.albumURL} className='title' target="_blank" rel="noopener noreferrer">
      {props.albumTitle}
    </a>
)}