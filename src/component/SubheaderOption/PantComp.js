import React from 'react'
import '../card.css'
export default function PantComp({data}) {
    console.log(data)
  return (
  <>
  <div className='parent'>
  {
data.pantData.map((ele)=>{
  return(
    <div className='card-container'>
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
            <button className='bttn' onClick={()=>data.addToCart(ele)}>add to cart</button>
            </div>
</div>
  )
})

}
</div>

  </>
  )
}

