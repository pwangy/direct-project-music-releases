import React from 'react'
import { AlbumArt } from './AlbumArt.js'
import { AlbumTitle } from './AlbumTitle.js'
import { Artists } from './Artists.js'

export const AlbumContainer = (props) => (
  <div className='albumContainer'>
    <AlbumArt 
      key={props.id}
      albumArt={props.albumArt}
    />
    <AlbumTitle 
      key={props.id}
      albumTitle={props.albumTitle}
      albumURL={props.albumURL}
    />

    <div className='artistContainer'>
      {props.item.artists.map(item => {
        return (
          <Artists 
            key={item.id}
            item={item}
            artistURL={props.artistURL} 
            artist={props.artist}
          />
        )
      })}
    </div>
  </div>
)