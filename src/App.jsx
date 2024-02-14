
import './styling/App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Infomation from './components/Infomation'
import { useState } from 'react'
import { arrayTestInfo } from './components/jsontests'
import { arrayTestName } from './components/jsontests'




function App() {


  const [testName, setTestName] = useState(arrayTestName[165]);
  const [testInfo, setTestInfo] = useState(arrayTestInfo[165]);


let collapse = '';

function handleClick(newTest) {
  setTestName(arrayTestName[newTest]);
  setTestInfo(arrayTestInfo[newTest]);
}



  return (
    <>
     {testInfo ? <Infomation  testName={testName} testInfo={testInfo} collapse={collapse} handleClick={handleClick}/> : null } 
    </>
  )
}

export default App



/*
 need to add:

 both tubes shown for karyo type test lith hep + EDTA.
 
 
 */