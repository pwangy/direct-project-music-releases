import React from 'react'
import { AlbumArt } from './AlbumArt.js'
import { Artists } from './Artists.js'
import { AlbumTitle } from './AlbumTitle.js'


export const AlbumContainer = () => {
  return (
    <div className='albumContainer'>
    <AlbumArt />,
    <AlbumTitle />,
    <div className='artistContainer'>
      <Artists />
    </div>
    </div>
  )
}


// import React from 'react'
// import { AlbumArt } from './AlbumArt.js'
// import { Artists } from './Artists.js'
// import { AlbumTitle } from './AlbumTitle.js'


// export const AlbumContainer = () => {
//   return (
//     <div className='albumContainer'>
//     <AlbumArt />,
//     <AlbumTitle />,
//     <div className='artistContainer'>
//         {album.artists.map((sub, subindex) =>
//           <Artists key={subindex} artist={sub.name} artistURL={sub.external_urls.spotify}/>
//             )}
//       <Artists />
//     </div>
//     </div>
//   )
// }