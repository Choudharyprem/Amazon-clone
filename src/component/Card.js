import React from 'react'
import './card.css';
import data from '../cart'
export default function Card({inputState}) {
  // console.log(inputState.addToCart); 
  let filteredData =data.filter(ele=>ele.type.includes(inputState.inputState.toLowerCase()))
  // console.log(filteredData)
  
  return (
    <>
    <div className='parent'>
      {
        filteredData.length===0?
    data.map((ele)=> {
      return(
        <div className='card-container'key={ele.id}>
        <div className='image-cotainer'>
        <img src={ele.image} alt=""/>
        </div>
        <div className='details'>
        <div className='title'>{ele.title}</div>
        <div className='price'>{ele.price}</div>
        <div className='quantity'>{ele.quantity}</div>
        <div className="card--stats">
                    <img src='/images/star.png'alt='' className="card--star"/>
                    <img src='/images/star.png'alt='' className="card--star"/>
                    <img src='/images/star.png'alt='' className="card--star"/>
                    <img src='/images/star.png'alt='' className="card--star"/>
                    <span className='rating'>{ele.rating}</span>
                </div>
                <button className='bttn' onClick={()=>inputState.addToCart(ele)}>add to cart</button>
                </div>
              </div>
      )
    }):filteredData.map((ele)=>{
        return(
          <div className='card-container'key={ele.id}>
          <div className='image-cotainer'>
          <img src={ele.image} alt=""/>
          </div>
          <div className='details'>
          <div className='title'>{ele.title}</div>
          <div className='price'>{ele.price}</div>
          <div className='quantity'>{ele.quantity}</div>
          <div className="card--stats">
                      <img src='/images/star.png'alt='' className="card--star"/>
                      <img src='/images/star.png'alt='' className="card--star"/>
                      <img src='/images/star.png'alt='' className="card--star"/>
                      <img src='/images/star.png'alt='' className="card--star"/>
                      <span className='rating'>{ele.rating}</span>
                  </div>
                  <button className='bttn'onClick={()=>inputState.addToCart(ele)}>add to cart</button>
                  </div>
                </div>
        )
      })
    

  }
    </div>
    </>
 )
  }

 