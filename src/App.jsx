import { useEffect, useState } from 'react'
import './App.css'
import Filter from './components/Filter'
import Footer from './components/Footer'

import axios from 'axios'


function App() {
  const [rikmart, setRikmart] = useState({})
 
const randomNum = Math.floor(Math.random()* 126) +1

  useEffect(()=>{
    
    axios.get(`https://rickandmortyapi.com/api/location/${randomNum}/`)
    .then(res => setRikmart(res.data))
  },[])

  return (
    <div className="App">
      <header className='header'></header>
      <Filter rikmar={rikmart}/>

    </div>
  )
}

export default App
