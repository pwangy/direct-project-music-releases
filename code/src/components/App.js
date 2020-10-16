import React from 'react'
import data from '../data.json'
import { Header } from './Header.js'
import { AlbumContainer } from './AlbumContainer.js'


export const App = () => {
  return (
    <div className='sectionContainer'>
      <Header />
      <div className='rows'>
      {data.albums.items.map((album) => {
          <AlbumContainer 
            item={album}
            key={album.id}
            albumArt={album.images[1].url}
            albumURL={album.external_urls.spotify}
            albumTitle={album.name}
            artistURL={album.artists[0].external_urls.spotify} 
          />
      })}
    </div>
  </div>
)}