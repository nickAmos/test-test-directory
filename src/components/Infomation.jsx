import { useEffect, useState } from 'react';
import '../styling/InfomationStyle.css';
import SearchBar from './SearchBar';
import Header from './Header'



export default function Infomation({testName, testInfo, collapse, handleClick}) {

const [laboratory, setLaboratory] = useState('');
const [altNames, setAltNames] = useState('');
const [specimen, setSpecimen] = useState('');
const [container, setContainer] = useState('');
const [minVol, setMinVol] = useState('');
const [minVolPaed, setMinVolPaed] = useState('');
const [testcode, setTestcode] = useState('');
const [show, setShow] = useState(false);
const [src, setSrc] = useState(null);

useEffect(() => {
    if (testInfo["Laboratory"]) {
        setLaboratory(testInfo["Laboratory"]);
    } else {setLaboratory(null)};

    if (testInfo['Alternate Names']) {
        setAltNames(testInfo['Alternate Names']);
    } else {setAltNames(null)};
   
    if (testInfo['Specimen']) {
        setSpecimen(testInfo['Specimen']);
    } else {setSpecimen(null)};

    if (testInfo['Container']) {
        setContainer(testInfo['Container'])
        if (testInfo['Container'] === 'EDTA (purple)') {
            setSrc('src/images/EDTATUBE.png');
        } 
         else if (testInfo['Container'] === 'Serum tube (gold cap OR red cap w. yellow insert)') {
            setSrc('src/images/SerumGel.png');
        }
        else {setSrc(null)};
        
    } else {setContainer(null)};

    if (testInfo['Minimum Adult Volume']) {
        setMinVol(testInfo['Minimum Adult Volume']);
    } else {setMinVol(null)};
    
   if (testInfo['Minimum Paediatric Volume']) {
    setMinVolPaed(testInfo['Minimum Paediatric Volume']);
   } else {setMinVolPaed(null)};
   
   if (testInfo['Test Code']) {
    setTestcode(testInfo['Test Code']);
   } else {setTestcode(null)};
   

}, [testInfo]);



if (altNames) {
    if (altNames.length >= 15) {
        collapse = true;
    } else { collapse = false};
}



function showNames() {
    const hidden = document.getElementById('hiddenNames');
    const show = document.getElementById('show');
    
    if (hidden.style.display === 'none') {
        setShow(true);
        hidden.style.display = "block";
    } else {
        setShow(false);
      hidden.style.display = "none";
    }
    }



    return (
        <>
        <Header/>
        <div className='SearchBar-container'>
            <SearchBar handleClick={handleClick}/>
        </div>

        <div className="mainbody-container">

            <div className='testName-container'>
                    <h1 id='testName'>{testName}</h1>
            </div>

            <div className='test-infomation'>
  
                <div className="text-container">
                            
                            <p id='info'>Testing department: <span id='variable' > {laboratory}</span></p>
                            {(altNames) ? <a id='showAnchor' onClick={showNames}>{show ? <span id='show'>Show less</span> : <span id='show'>Show alternate names </span>}</a> : null}
                            <div id='hiddenNames'>{altNames ? <span id='variable'>{altNames}</span> : null}</div>
                            <p id='info'>Specimen type: <span id='variable' >{specimen}</span></p>
                            <p id='info'>Container: <span id='variable'>{container}</span></p>
                            {(minVol != 'None') ? <p id='info'>Minimum Volume: <span id='variable' >{minVol}</span></p> : null}
                            {(minVolPaed != 'None') ? <p id='info'> Minimum Paediatric Volume: <span id='variable' >{minVolPaed}</span></p> : null}
                            <p id='info'>CSR Test code: <span id='variable' >{testcode}</span></p>
                        
                            
                </div>

                <div className="images">
                    <img src={src}/>
                </div>
            </div>

            
            
        </div>
        </>
    )

}







/* 
{altNames && !collapse ? <span>Alternative Names: {altNames} </span> : null} {(altNames && collapse) ? <span>Alternative Names: <a id='show' onClick={showNames}>{show ? <span>show less</span> : <span>show more</span>}</a></span> : null} {(altNames && !collapse) ? <span>{altNames}</span> : null}
            <div id='hiddenNames'>{altNames}</div>
*/