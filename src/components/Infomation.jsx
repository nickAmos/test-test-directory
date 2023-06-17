import { useEffect, useState } from 'react';
import '../styling/InfomationStyle.css';
import SearchBar from './SearchBar';
import Header from './Header'



export default function Infomation({testName, testInfo, collapse, handleClick}) {

const [laboratory, setLaboratory] = useState('');
const [altNames, setAltNames] = useState('');
const [specimen, setSpecimen] = useState('');
const [container, setContainer] = useState('');
const [testcode, setTestcode] = useState('');

const [addCollectInstruct, setAddCollectInstruct] = useState(null);
const [collectionInstruct, setCollectionInstruct] = useState('');
const [minVol, setMinVol] = useState('');
const [minVolPaed, setMinVolPaed] = useState('');
const [notes, setNotes] = useState('');
const [frequency, setFrequency] = useState('');

const [storage, setStorage] = useState('');
const [transport, setTransport] = useState('');
const [addTransport, setAddTransport] = useState('');
const [addStorage, setAddStorage] = useState('');
const [labNotes, setLabNotes] = useState('');

const [show, setShow] = useState(false);
const [dropdown, setdropDown] = useState(false);
const [src, setSrc] = useState(null);



useEffect(() => {
    if (testInfo["Laboratory"]) {
        setLaboratory(testInfo["Laboratory"]);
    } else {setLaboratory(null)};

    if (testInfo['Additional Collection Instructions']) {
        setAddCollectInstruct(testInfo['Additional Collection Instructions']);
    } else {setAddCollectInstruct(null)};

    if (testInfo['Alternate Names']) {
        setAltNames(testInfo['Alternate Names']);
    } else {setAltNames(null)};
   
    if (testInfo['Specimen']) {
        setSpecimen(testInfo['Specimen']);
    } else {setSpecimen(null)};

    if (testInfo['Collection Instruction']) {
        setCollectionInstruct(testInfo['Collection Instruction']);
    } else {setCollectionInstruct(null)};

    if (testInfo['Storage Instructions']) {
        setStorage(testInfo['Storage Instructions']);
    } else {setStorage(null)};

    if (testInfo['Transport Instructions']) {
        setTransport(testInfo['Transport Instructions']);
    } else {setTransport(null)};

    if (testInfo['Additional Transport Instruction']) {
        setAddTransport(testInfo['Additional Transport Instruction']);
    } else {setAddTransport(null)};

    if (testInfo['Additional (Storage) Instructions']) {
        setAddStorage(testInfo['Additional (Storage) Instructions']);
    } else {setAddStorage(null)};

    if (testInfo['Notes']) {
        setNotes(testInfo['Notes']);
    } else {setNotes(null)};

    if (testInfo['Laboratory Notes']) {
        setLabNotes(testInfo['Laboratory Notes']);
    } else {setLabNotes(null)};

    if (testInfo['Frequency']) {
        setFrequency(testInfo['Frequency']); 
    } else {setFrequency(null)};

    if (testInfo['Container']) {
        setContainer(testInfo['Container'])
        if (testInfo['Container'] === 'EDTA (purple)') {
            setSrc('src/images/EDTATUBE.png');
        } 
         else if (testInfo['Container'] === 'Serum tube (gold cap OR red cap w. yellow insert)') {
            setSrc('src/images/SerumGel.png');
        }
        else if (testInfo['Container'] === 'Sodium Citrate (Blue top)') {
            setSrc('src/images/CitrateTube.png');
        }
        else if (testInfo['Container'].includes('Lithium Heparin - No Gel (green)')) {
            setSrc('src/images/LHNG.png');
        }
        else if (testInfo['Container'] === 'Trace Metal Tube (Navy top)') {
            setSrc('src/images/TRACE.png');
        }
        else if (testInfo['Container'] === '9ml EDTA (purple)') {
            setSrc('src/images/9mlEDTA.png');
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

function collectorDropdown() {
    const getdropdown = document.getElementById('collector-dropdown');
    setdropDown(!dropdown);
    if (dropdown) {
        getdropdown.style.display = 'block';
    }
    else { getdropdown.style.display = 'none'};
}

function laboratoryDropdown() {
    const getdropdown = document.getElementById('laboratory-dropdown');
    setdropDown(!dropdown);
    if (dropdown) {
        getdropdown.style.display = 'block';
    }
    else { getdropdown.style.display = 'none'};
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
                    <img src={src}/>
            </div>

            <div className='test-infomation'> 

  
                <div className="text-container">
                        
                            <p id='info'>Specimen type: <span id='variable' >{specimen}</span></p>
                            <p id='info'>Container: <span id='variable'>{container}</span></p>
                            {(minVol != 'None') ? <p id='info'>Minimum Volume: <span id='variable' >{minVol}</span></p> : null}
                            {(minVolPaed != 'None') ? <p id='info'> Minimum Paediatric Volume: <span id='variable' >{minVolPaed}</span></p> : null}
                            <p id='info'>CSR Test code: <span id='variable' >{testcode}</span></p>
                            {(laboratory === 'Referred Test') ? <p>Reffered to: {testInfo['External Laboratory']}</p> : <p id='info'>Testing department: <span id='variable' > {laboratory}</span></p> }
                            {(altNames) ? <a id='showAnchor' onClick={showNames}>{show ? <span id='show'>Show less</span> : <span id='show'>Show alternate names </span>}</a> : null}
                            <div id='hiddenNames'>{altNames ? <span id='variable'>{altNames}</span> : null}</div>  
                </div>

                <div className='dropdown-container'>

                    <div className='collector-info'>
                        <button id='collector-header' onClick={collectorDropdown}>
                            <h2>Collector Infomation</h2>
                        </button>
                        <div id='collector-dropdown'>
                            {collectionInstruct && addCollectInstruct ? <div><h3>Instructions:</h3><p>{collectionInstruct}</p><br></br><p>{addCollectInstruct}</p></div> : null}
                            {collectionInstruct && !addCollectInstruct  ? <div><h3>Instructions: </h3><p>{collectionInstruct}</p></div> : null}
                            {!collectionInstruct && addCollectInstruct  ? <div><h3>Instructions: </h3><p>{addCollectInstruct}</p></div> : null}
                            {notes  ? <div><h3>Notes: </h3><p>{notes}</p></div> : null}
                            {minVol != 'None'  ? <div><h3>Minimum Volume </h3><p>{minVol}</p></div> : null}
                            {minVolPaed != 'none'  ? <div><h3>Minimum Volume Paediatric </h3><p>{minVolPaed}</p></div> : null}
                            {frequency ? <div><h3>Frequency:</h3><p>{frequency}</p></div> : null}
                        </div>
                    </div>

                    <div className='laboratory-info'>
                    <button id='laboratory-header' onClick={laboratoryDropdown}>
                            <h2>Laboratory Infomation</h2>
                        </button>
                        <div id='laboratory-dropdown'>
                            { storage && addStorage ? <div><h3>Storage:</h3><p>{storage}</p><br></br><p>{addStorage}</p></div> : null}
                            { storage && !addStorage ? <div><h3>Storage:</h3><p>{storage}</p></div> : null}
                            { !storage && addStorage ? <div><h3>Storage:</h3><p>{addStorage}</p></div> : null}
                            { transport && addTransport ? <div><h3>Transport:</h3><p>{transport}</p><br></br><p>{addTransport}</p></div> : null}
                            { transport && !addTransport ? <div><h3>Transport:</h3><p>{transport}</p></div> : null}
                            { !transport && addTransport ? <div><h3>Transport:</h3><p>{addTransport}</p></div> : null}
                            { labNotes ? <div><h3>Notes:</h3><p>{labNotes}</p></div> : null}
                           
                        </div>
                    </div>

                </div>

                

            </div>    
        </div>
        </>
    )

}

/* 
const [storage, setStorage] = useState('');
const [transport, setTransport] = useState('');
const [addTransport, setAddTransport] = useState('');
const [addStorage, setAddStorage] = useState('');
const [labNotes, setLabNotes] = useState('');
*/
