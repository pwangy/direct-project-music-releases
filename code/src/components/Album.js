import React from 'react'

//Component for each album card
export const Albums = (props) => {
  return ( 
    <div className="cover-container">
        <img src={props.url} alt={props.name} className='album-art'></img>
        <div className="opacity-layer"></div>
            <div className="icon-container">
                <img src="/icons/heart.svg" alt="heart icon" className="heart-icon"/>
                <div className="play-container">
                  <img src="/icons/play.svg" alt="play button" className="play-button"/>
                  <div className="play-overlay"></div>
                </div>
                <img src="/icons/dots.svg" alt="ellipsis icon" className="ellipsis-icon"/>
            </div>
        </div>
  )}