import React from 'react'

export const Albums = (props) => {
  return ( 
    <div className="coverContainer">
        <img src={props.url} alt={props.name} className='albumArt'></img>
        <div className="opacityLayer"></div>
            <div className="iconContainer">
                <img src="/icons/heart.svg" alt="heart icon" className="heartIcon"></img>
                <div className="playContainer">
                  <img src="/icons/play.svg" alt="play button" className="playButton"></img>
                  <div className="playOverlay"></div>
                </div>
                <img src="/icons/dots.svg" alt="ellipsis icon" className="ellipsisIcon"></img>
            </div>
        </div>
  )}