import React from 'react'
// to render object we used array.map() function.
// to filter out something from an array we use array.filter() function.
//  to pass information from one parent comp to a child comp we use props.
import data from '../../cart.js'
import ShirtComp from './ShirtComp.js'

export default function Shirt({addToCart}) {
  console.log(data)
  let shirtData= data.filter((ele)=> ele.type === "shirt");
  return (
   <ShirtComp  data={{shirtData,addToCart}}/>
  )
}
