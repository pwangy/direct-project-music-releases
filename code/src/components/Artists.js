import React from 'react'

export const Artists = (props) => {
   return (
    <a 
        href={props.artistURL} 
        className='artists'
        target="_blank" 
        rel="noopener noreferrer">
            {props.artist}
    </a>
   )
}