import { useEffect, useState } from 'react';
import '../styling/InfomationStyle.css';



export default function Infomation({testName, testInfo}) {

const [laboratory, setLaboratory] = useState('');
const [altNames, setAltNames] = useState('');
const [specimen, setSpecimen] = useState('');
const [container, setContainer] = useState('');
const [minVol, setMinVol] = useState('');
const [minVolPaed, setMinVolPaed] = useState('');
const [testcode, setTestcode] = useState('');


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

let collapse = '';

if (altNames) {
    if (altNames.length >= 15) {
        collapse = true;
    } else { collapse = false};
}



function showNames() {
    const hidden = document.getElementById('hiddenNames');
    const show = document.getElementById('show');
    
    if (hidden.style.display === 'none') {
        show.innerHTML = 'show less'
        hidden.style.display = "block";
    } else {
        show.innerHTML = 'show more';
      hidden.style.display = "none";
    }
    }



    return (
        <>
        <div className="results-container">

            <div className="text-container">
            <h1>{testName}</h1>
            <p>{laboratory}</p>
            
            {altNames && !collapse ? <span>Alternative Names: {altNames} </span> : null} {(altNames && collapse) ? <span>Alternative Names: <a id='show' onClick={showNames}>show more</a></span> : null} {(altNames && !collapse) ? <span>{altNames}</span> : null}
            <div id='hiddenNames'>{altNames}</div>
            <p>{specimen}</p>
            <p>{container}</p>
            {(minVol != 'None') ? <p>Minimum Volume: {minVol}</p> : null}
            {(minVolPaed != 'None') ? <p>Minimum Paediatric Volume: {minVolPaed}</p> : null}
            <p>{testcode}</p>
            
                
            </div>

            <div className="images">
                
         
            </div>
            
        </div>
        </>
    )

}
