import React from 'react'
import data from '../data.json'
import { Header } from './Header.js'
import { AlbumContainer } from './AlbumContainer.js'


export const App = () => {
  return (
    <div className='sectionContainer'>
      <Header />
      <div className='rows'>
      {data.albums.items.map((item) => (
          <AlbumContainer 
            item={item}
            key={item.id}
            albumArt={item.images[1].url}
            albumURL={item.external_urls.spotify}
            albumTitle={item.name}
            artistURL={item.artists[0].external_urls.spotify} 
          />
      ))}
    </div>
  </div>
)}