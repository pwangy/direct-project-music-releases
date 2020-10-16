import React from 'react'

export const Artists = (props) => {
   return (
    <a 
        href={props.item.map(artist => artist.external_urls.spotify)} 
        className='artists'
        target="_blank" 
        rel="noopener noreferrer">
            {props.href.map(artist => artist.name).join(', ').replace(/, ([^,]*)$/, " & $1")}
    </a>
   )}



//    

// import React from 'react'

// export const Artists = (props) => {
//     const artistList = () => {
        
//         return props.artists.map((object) => {
//             return object.name
//         })
//         .join(", ")
//         .replace(/, ([^,]*)$/, "& $1")
//     }
//    return (
//        <div className='artistContainer'>
//            <a 
//             className='artists'
//             href="#"
//             target="_blank" 
//             rel="noopener noreferrer">
//                 {artistList()}
//             </a>
//        </div>
//    )}


//    href={props.artistURL}

// artists.js


// import React from 'react'

//    export const Artists = (props) => {
//       return (
//        <span><a className='artists' href={props.artistURL}>
//            {props.artist}
//        </a></span>
//       )}
   