import React from 'react'
import  '../Card/Card.css'

function Card() {
  return (
    <>
          <div className="card">
              <div className="hero-img">
                  <img src="https://images.unsplash.com/photo-1586084786421-3c17ba0108a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80" alt="Mustang" />
              </div>
              <div className="hero-content">
                  <h1 className="car-name">Technical Events</h1>
                  <h2 className="features">
                      HEllo
                  </h2>
                  <i>
                      <h2 className="price">$55,000</h2>
                  </i>
              </div>
          </div>
          </> 
  )
}

export default Card