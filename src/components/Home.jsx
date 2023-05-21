import React from 'react'
import Homepage from './Homepage.jpg' 
import Products from './Products'
export default function Home() {
  return (
    <div className='hero container'>
        <div class="card bg-dark text-white">
            <img class="card-img" src={Homepage} alt="Card image" height="550px"/>
            <div class="card-img-overlay">
                <h5 class="card-title display-3 fw-bolder text-dark">NEW SEASON ARRIVALS </h5>
                <p class="card-text lead fs-3 text-dark">SHOP YOUR FAVOURITE ITEMS OR ADD TO CART.</p>
            </div>
        </div>
        <Products/>
    </div>
  )
} 
