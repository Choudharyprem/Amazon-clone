import React from 'react'
import data from '../../cart.js'
import PantComp from './PantComp.js';


export default function Pant({addToCart}) {
  console.log(data)
  let pantData= data.filter((ele)=> ele.type === "pant");
  return (
    <PantComp  data={{pantData,addToCart}}/>
  )
}
