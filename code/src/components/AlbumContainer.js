import React from 'react'
import { AlbumArt } from './AlbumArt.js'
import { Artists } from './Artists.js'
import { AlbumTitle } from './AlbumTitle.js'


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
          />
        )
      })}
    </div>
  </div>
)