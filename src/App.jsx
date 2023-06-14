
import './styling/App.css'

import Infomation from './components/Infomation'
import SearchBar from './components/SearchBar'
import { useEffect, useState } from 'react'
import { arrayTestInfo } from './components/jsontests'
import { arrayTestName } from './components/jsontests'
import Landing from './components/Landing'



function App() {


  const [testName, setTestName] = useState(null);
  const [testInfo, setTestInfo] = useState(null);
  



  //add states for all pieces of info we want to display. 

let collapse = '';

function handleClick(newTest) {
  setTestName(arrayTestName[newTest]);
  setTestInfo(arrayTestInfo[newTest]);
}



  return (
    <>
      
      {!testName ?  <Landing handleClick={handleClick}/> : null}
     
 
      {testName ? <Infomation  testName={testName} testInfo={testInfo} collapse={collapse} handleClick={handleClick}/> : null }
    </>
  )
}

export default App



/*
 "Alternate Names": 
            "Cerner Test Name": 
            "Laboratory": 
            "Specimen": "
            "Container": "Serum tube (gold cap OR red cap w. yellow insert)",
            "Collection Instruction": 
            "Additional Collection Instructions": "Haemolysed samples will not be analysed.",
            "Minimum Adult Volume": "5mL",
            "Minimum Paediatric Volume": "None",
            "Frequency": "Daily",
            "Reference Interval": 
            "Container ID": 
            "Storage Instructions": 
            "Additional (Storage) Instructions": 
            "Transport Instructions": */