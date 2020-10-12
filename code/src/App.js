import React from 'react'
import data from './data.json'
import { Albums } from './Album.js'
import { Artists } from './Artists.js'

console.log(data)




export const App = () => {
  return (

    data.albums.items.map((album, subindex) => {

      return <div>

       <Albums url={album.images[0].url} name={album.name} width={album.images[0].width} height={album.images[0].height}/>
       <Artists key={subindex} albumName={album.name}/>

        { 
          album.artists.map((sub, subindex) =>
            <Artists key={subindex} artist={sub.name} />)
        }

      </div>

    })

  



  )
}

