import React from 'react'

export const Artists = (props) => {
   return (
    <a 
        href={props.item.external_urls.spotify} 
        className='artists'
        target="_blank" 
        rel="noopener noreferrer">
            {props.item.name}
    </a>
   )
}