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



// import { AlbumArt } from './AlbumArt.js'
// import { Artists } from './Artists.js'
// import { AlbumTitle } from './AlbumTitle.js'


// export const App = () => {
//   return (
//     <div className='sectionContainer'>
//       <Header />
//         <section className='rows'>
//         {data.albums.items.map((album) => {
//           return (
//             <div className='albumContainer'>
//               <AlbumArt
//                 key={album.id}
//                 url={album.images[0].url}
//               />
//               <AlbumTitle 
//                 key={album.name}
//                 albumName={album.name}
//                 albumURL={album.external_urls.spotify}
//               />
//               <div className='artistContainer'>
//                   {album.artists.map((sub, subindex) =>
//                     <Artists 
//                       key={subindex} artist={sub.name} artistURL={sub.external_urls.spotify}
//                     />
//                   )}
//                 </div>
//               </div>
//           )})}
//       </section>
//   </div>
// )}