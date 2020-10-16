scratch.js

//   a foreach mapping function to get url and artist name

const object1 = {
  a: 'somestring',
  b: 42
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// expected output:
// "a: somestring"
// "b: 42"
// order is not guaranteed

then we need to print the artist w/ corresponding url and then add logic for , or & 



import React from 'react'

export const Artists = (props) => { 
    const albumArtists = () => {
        props.item.map((sub) => {
            return sub.name
        })
        .join(", ")
        .replace(/, ([^,]*)$/, "& $1")
    }

    return <a 
        href={props.artistURL} 
        className='artists' 
        target="_blank" 
        rel="noopener noreferrer">
            {albumArtists()}
    </a>
   }






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







// Logic:
// if in the last position of array: print artist's name
// if index 2 contains something: seperate each artist by , 
// if  index 1 of artist array then print artist names seperated by &

array variable = items

const addSeperator = (item, i) => {
  if ( i == item.length -1 ) && ( i != item[2] )
  
  {
    return `${items[0] }`
  }
  
  
  
  if ( === undefined) {
    return `${items[0]}`
  }
}



from Maks:
[1, 2, 3, 4, 5].forEach((item, i) => {
    if (i === item.length -1 {
        ' & '
    })
})


function commaOrAmpersand(props) {
  const 
    logic = a => a.concat(a.splice(-2, 2).join(' & ')).join(', '),
    beatles = { guitar2:'John', bass:'Paul', drums: 'Ringo', guitar1: 'George' }
  
  return logic(Object
    .entries(props)
    .filter(([, v]) => v)
    .map(([w]) => beatles[w])
              )
}

console.log(commaOrAmpersand({ guitar1: true, guitar2: false, drums: false, bass: false }))
console.log(commaOrAmpersand({ guitar1: true, guitar2: true, drums: false, bass: false }))
console.log(commaOrAmpersand({ guitar1: true, guitar2: true, drums: true, bass: false }))



from unit tests

export const firstLast = (items) => {
  if (items[0] === undefined) {
    return 'No items!'
  } else if (items[1] === undefined) {
    return `Only item: ${items[0]}`
  } { 
  return `First: ${items[0]}, Last: ${items[items.length -1]}`
}}


import { firstLast } from './2-first-last'

describe('2-first-last', () => {
  it('should return the first and last items from an array with two items', () => {
    expect(firstLast(['a', 'b'])).toEqual('First: a, Last: b')
  })

  it('should return the first and last items from an array with many items', () => {
    expect(firstLast(['a', 'b', 'c', 'd', 'e'])).toEqual('First: a, Last: e')
  })

  it('Should only return the first item if the array only has one item', () => {
    expect(firstLast(['bob'])).toEqual('Only item: bob')
  })

  it('Should return "No items!" if the array is empty', () => {
    expect(firstLast([])).toEqual('No items!')
  })
})


{/* 
    
  <Artists key={subindex} artist={sub.name} artistURL={sub.external_urls.spotify}/>
  )}
</div>

const seperatorCheck = (props) => {
  const 

}  
const addSeperator = (item, i) => {
  if ( i == item.length -1 ) && ( i != item[2] )
  
  {
    return `${items[0] }`
  }
  
  
  if ( === undefined) {
    return `${items[0]}`
  }
}


from Maks:
[1, 2, 3, 4, 5].forEach((item, i) => {
    if (i === item.length -1 {
        ' & '
    })
})


export const Artists = (props) => {
   return (
    <a className='artists' href={props.artistURL}>
        {props.artist}
    </a>
   )}

 return (
    <span><a className='artists' href={props.artistURL}>
        {props.artist ? ',':" }
    </a></span>
   )}


*/}