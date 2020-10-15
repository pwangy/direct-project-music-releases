import React from 'react'

export const AlbumTitle = (props) => {
  return ( 
    <a href={props.albumURL} className='title'>
      {props.albumName}
    </a>
)}