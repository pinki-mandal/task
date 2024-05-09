import React from 'react'
import '../App.css'
import Cards from './Cards'
import Footer from './footer'
const Main = () => {
  return (
    <div >
       <div className='main'>
        <img src="https://wallpapercave.com/wp/wp2568544.jpg" alt=""></img>
       </div>
       <div className='contains'>
        <h2>Top Students</h2>
        <Cards></Cards>
        <Footer></Footer>
       
       </div>
      
    </div>
  )
}

export default Main
