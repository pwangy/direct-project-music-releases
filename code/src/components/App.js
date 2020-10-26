import React from 'react'

import data from '../data.json'
import { Header } from './Header.js'
import { Albums } from './Album.js'
import { Artists } from './Artists.js'
import { ReleaseTitle } from './ReleaseTitle.js'

//*Main rendering component
export const App = () => {
  return (
    <div className='section-container'>
      <Header />
      <section className='rows'>

      {/*Mapping through all the albums in the json */}
      {data.albums.items.map((album) => {
        return (
            <div className='album-container' key={album.id}>
              <Albums url={album.images[0].url} name={album.name} />
              <ReleaseTitle albumName={album.name} albumURL={album.external_urls.spotify} />
              <div className='artist-container'>
                  {/*Mapping through all the artists in the json to get hold of artist name and their respective artist url */}
                  {album.artists.map((sub, subindex) =>
                  <Artists key={subindex} artist={sub.name} artistURL={sub.external_urls.spotify}/>
            )}
              </div>
            </div>
        )
      })}      
      </section>
    </div>
  )
}