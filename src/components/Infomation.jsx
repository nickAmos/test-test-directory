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
import FooterLinks from './FooterLinks';
import EDTA9 from '../images/9mlEDTA.png';
import EDTA4 from '../images/EDTATUBE.png';
import UC24 from '../images/24UC.jpeg';
import ACD from '../images/ACDtube.jpeg';
import Bswab from '../images/bacterialSwab.jpeg';
import citrate from '../images/CitrateTube.png';
import CSF from '../images/CSFTUBEbad.png';
import ESR from '../images/ESRTUBE.png';
import fecal from '../images/fecal-pot.png';
import fluoride from '../images/fluorideOxalate.jpeg';
import lithHep from '../images/LH(GEL).png';
import lithHepNG from '../images/LHNG.png';
import seeColl from '../images/seeCollection.jpeg';
import serum from '../images/SerumGel.png';
import pot from '../images/sterile-pot.png';
import trace from '../images/TRACE.png';
import Vswab from '../images/viralswabPOOR.jpeg';
import SNG from '../images/Plainredtop.webp';




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
const [orderingInfo, setOrderingInfo] = useState('');
const [externalLab, setExternalLab] = useState('');

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
    if (testInfo["External Laboratory"]) {
        setExternalLab(testInfo["External Laboratory"]);
    } else {setExternalLab(null)};

    if (testInfo["Ordering Information"]) {
        setOrderingInfo(testInfo["Ordering Information"]);
    } else {setOrderingInfo(null)};

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
            setSrc(EDTA4);
        } 
         else if (testInfo['Container'] === 'Serum tube (gold cap OR red cap w. yellow insert)') {
            setSrc(serum);
        }
        else if (testInfo['Container'] === 'Sodium Citrate (Blue top)') {
            setSrc(citrate);
        }
        else if (testInfo['Container'].includes('Lithium Heparin - No Gel (green)')) {
            setSrc(lithHepNG);
        }
        else if (testInfo['Container'] === 'Trace Metal Tube (Navy top)') {
            setSrc(trace);
        }
        else if (testInfo['Container'] === '9ml EDTA (purple)') {
            setSrc(EDTA9);
        } 
        else if (testInfo['Container'].includes('ESR')) {
            setSrc(ESR);
        }
 //put swabs here to avoid swap to sterile pot 

        else if (testInfo['Container'].includes('Fluoride')) {
            setSrc(fluoride);
        } else if (testInfo['Container'].includes('24')) {
            setSrc(UC24);
        } else if (testInfo['Container'].includes('CSF')) {
            setSrc(CSF);
        }
        
        else if ((testInfo['Container'].includes('Sterile container') || testInfo['Container'].includes('Sterile Container')) && !testInfo['Container'].includes('Swab') ) {
            setSrc(pot);
        }
        else if (testInfo['Container'].includes('Faecal Pot')) {
            setSrc(fecal);

        } else if (testInfo['Container'].includes('ACD')) {
            setSrc(ACD);
        } else if (testInfo['Container'].includes('Plain')) {
            setSrc(SNG);
        } else if (testInfo['Container'].includes('Lithium Heparin - Gel (mint green)') ||
        testInfo["Test Code"] === "AMM")  {
            setSrc(lithHep);
        }
        
        else {
            setSrc(null);
        }

        //swabs are done outside main if else to override sterile pot

        if (testInfo['Container'].includes('Swab - Bacterial')) {
            setSrc(Bswab);
        } 
        
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
                <Testname testName={testName} storage={storage} addStorage={addStorage} transport={transport} addTransport={addTransport} labNotes={labNotes} laboratory={laboratory} collectionInstruct={collectionInstruct} addCollectInstruct={addCollectInstruct}/>
            </div>
        </Reveal>

        <div className="mainbody-container">

            <div className='basicInfo-container'> 
            
                
                <Reveal posX={200} delay={0.5} testName={testName} refresh={true}>
                    <div className='basicTest'>
                        <BasicTestInfo specimen={specimen}container={container} testcode={testcode} testInfo={testInfo} altNames={altNames} laboratory={laboratory} externalLab={externalLab} />
                    </div>
                </Reveal>
                <Reveal posY={200} delay={0.75} testName={testName} refresh={true}>
                <div className='container-img'>
                    <Container src={src} container={container} collectionInstruct={collectionInstruct} addCollectInstruct={addCollectInstruct}/>
                </div>
                </Reveal>
            </div>  

            <div className='staffInfo-container'>
                <Reveal posX={-100} delay={0.5}>
                <div className='collector-info'>
                    <CollectorInfo collectionInstruct={collectionInstruct} addCollectInstruct={addCollectInstruct} notes={notes} minVol={minVol} minVolPaed={minVolPaed} frequency={frequency} orderingInfo={orderingInfo} />
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

                <div id='Extra-contact-info'>
                    <div id='extra-contact-flex'>
                        <div id='boxOne'>
                        <h3>Useful Links</h3>
                            <FooterLinks href={'https://www.austinpathology.org.au/'} name={'Home'} />
                            <FooterLinks href={'https://www.austinpathology.org.au/values'} name={'Our Values'} />
                            <FooterLinks href={'https://www.austinpathology.org.au/specialists#specialists'} name={'Our Specialists'} />
                            <FooterLinks href={'https://www.austinpathology.org.au/specialists#directors'} name={'Our Directors'} />
                            <FooterLinks href={'https://www.austinpathology.org.au/find-us'} name={'Find Us'} />
                            <FooterLinks href={'https://www.austinpathology.org.au/department-directory#staff'} name={'Key Staff'} />

                        </div>
                        <div id='boxTwo'>
                        <h3>Services</h3>
                            <FooterLinks href={'https://www.austinpathology.org.au/research'} name={'Trail & Research'} />
                            <FooterLinks href={'https://www.austinpathology.org.au/transfusions'} name={'Blood Transfusion'} />
                            <FooterLinks href={'https://www.austinpathology.org.au/diagnostic-services'} name={'Diagnostic Services'} />
                            <FooterLinks href={'https://www.austinpathology.org.au/doctor-services'} name={'Doctor Services'} />
                            <FooterLinks href={'https://www.austinpathology.org.au/patient-information'} name={'Patient Services'} />
                            <FooterLinks href={'https://www.austinpathology.org.au/collection-centres'} name={'Collection Centres'} />
                      
                            
                        </div>
                        <div id='boxThree'>
                            <h3>Creator</h3>
                            <FooterLinks href={'https://www.linkedin.com/in/nick-amos-2a2688247'} name={'Linkedin'} />
                            <FooterLinks href={'https://github.com/nickAmos'} name={'Github'}/>
                            <p>nick.amos2000@gmail.com</p>
                        </div>
                    </div>

                </div>
            </Reveal>

        </footer>
        </div>
    )

}




/*   <h3>Useful links</h3>
                            <p>Home</p>
                            <p>Our Values</p>
                            <p>Our Specialists</p>
                            <p>Our Directors</p>
                            <p>Find Us</p>
                            <p>Key Staff</p> */