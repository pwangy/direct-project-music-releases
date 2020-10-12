import React from 'react'


export const Albums = (props) => {

return <img src={props.url} alt={props.name} width={props.width} height={props.height} key={props.name}></img>

}




