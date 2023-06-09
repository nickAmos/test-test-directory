
import './styling/App.css'
import Header from './components/Header'
import Infomation from './components/Infomation'
import SearchBar from './components/SearchBar'
import { useEffect, useState } from 'react'

function App() {

  const [image, setImage] = useState('../src/images/EDTA.png');

  
  

  return (
    <>
      <Header/>
      <SearchBar />
      <Infomation image={image}/>
    </>
  )
}

export default App
