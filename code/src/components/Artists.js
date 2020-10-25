import React from 'react'

//Component to show every artist and its URL
export const Artists = (props) => {
    return (
        <span>
            <a className='artists' href={props.artistURL}>
                {props.artist}
            </a>
        </span>
)}


   