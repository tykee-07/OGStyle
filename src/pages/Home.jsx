import React from 'react'
import Banner from '../components/Banner/Banner'
import Best from '../components/Beset/Best'
import Blog from '../components/Blog/Blog'
import Brend from '../components/Brend/Brend'

function Home() {
  return (
    <div className='container'>
      <Banner/>
      <Best/>
      <Blog/>
      <Brend/>
    </div>
  )
}

export default Home
