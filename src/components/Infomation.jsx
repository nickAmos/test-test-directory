import { useEffect, useState, useRef } from 'react';
import '../styling/InfomationStyle.css';
import SearchBar from './SearchBar';
import Header from './Header'
import BasicTestInfo from './BasicTestInfo';
import CollectorInfo from './CollectorInfo';
import LaboratoryInfo from './LaboratoryInfo';
import Testname from './Testname';
import Container from './Container';
import Reveal from './Reveal';
import Footer from './Footer';




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
//put swabs here to avoid swap to sterile pot 
        
        else if (testInfo['Container'].includes('Sterile container') || testInfo['Container'].includes('Sterile Container') ) {
            setSrc('src/images/sterile-pot.png');
        }
        else if (testInfo['Container'].includes('Faecal Pot')) {
            setSrc('src/images/fecal-pot.png');
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

const footer = `<footer section>`;

if (altNames) {
    if (altNames.length >= 15) {
        collapse = true;
    } else { collapse = false};
}

    return (
        <div>
            <Reveal posY={-100} >
            <Header/>

            <div className='SearchBar-container'>
                <SearchBar handleClick={handleClick}/>
            </div>
        </Reveal>

        <Reveal posX={-200} delay={0.25} testName={testName} refresh={true}>
            <div className='Testname-container'>
                <Testname testName={testName} storage={storage} addStorage={addStorage} transport={transport} addTransport={addTransport} labNotes={labNotes} laboratory={laboratory} />
            </div>
        </Reveal>

        <div className="mainbody-container">

            <div className='basicInfo-container'> 
            
                
                <Reveal posX={200} delay={0.5} testName={testName} refresh={true}>
                    <div className='basicTest'>
                        <BasicTestInfo specimen={specimen}container={container} testcode={testcode} testInfo={testInfo} altNames={altNames} laboratory={laboratory}  />
                    </div>
                </Reveal>
                <Reveal posY={200} delay={0.75} testName={testName} refresh={true}>
                <div className='container-img'>
                    <Container src={src} />
                </div>
                </Reveal>
            </div>  

            <div className='staffInfo-container'>
                <Reveal posX={-100} delay={0.5}>
                <div className='collector-info'>
                    <CollectorInfo collectionInstruct={collectionInstruct} addCollectInstruct={addCollectInstruct} notes={notes} minVol={minVol} minVolPaed={minVolPaed} frequency={frequency} />
                </div>
                </Reveal>
                <Reveal posX={100} delay={0.6}>
                <div className='laboratory-info'>
                    <LaboratoryInfo storage={storage} addStorage={addStorage} transport={transport} addTransport={addTransport} labNotes={labNotes}  />
                </div>
                </Reveal>
            </div>  

        </div>

        <footer>
            <Reveal posY={100} delay={0.75}>
                <div id='footer-container'>
                    <Footer>
                        
                    </Footer>
                </div>
            </Reveal>
        </footer>
        </div>
    )

}


