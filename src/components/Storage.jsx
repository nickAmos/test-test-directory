import '../styling/Testname.css';
import 'semantic-ui-css/semantic.min.css';
import HelpfulButton from './HelpfulButton';
import '../styling/Storage.css';


export default function Storage({storage, addStorage, transport, addTransport, labNotes, addCollectInstruct, collectionInstruct, testName, laboratory}) {

    let storageString = (`${storage} ${addStorage} ${transport} ${addTransport}`).toLocaleLowerCase();
    let transportString = (`${addCollectInstruct} ${transport} ${addTransport} ${collectionInstruct} ${testName}`).toLocaleLowerCase();
    let centrifugeString = (`${labNotes} ${addTransport} ${collectionInstruct} ${addCollectInstruct} ${storage} ${addStorage}`).toLocaleLowerCase();
    let collectOnIce = false;
    let aliquotFreeze = false;
    let storeFrozen = false;
    let storeFridge = false;
    let storeRoomT = false;
    let centrifugeNo = false;
    let wrapfoil = false;

    console.log(storageString);

 

    if (transportString.includes('place tube on ice') 
        || 
        transportString.includes('collect on ice')
        ||
        transportString.includes('laboratory on ice')
        ||
        transportString.includes('pot on ice')
        ||
        transportString.includes('transport on ice')
        ) {
            collectOnIce = true; 
        } else {
            collectOnIce = false;
           };
    

    if (storageString.includes('aliquot and freeze')
        || 
        storageString.includes('store serum frozen')
        ||
        storageString.includes('aliquotted and then frozen')
        ||
        storageString.includes('foil and frozen')
        ||
        storageString.includes('aliquotted as soon') ) {
       aliquotFreeze = true;
    } else {
        aliquotFreeze = false;
    };


    

    if (storageString.includes('store serum frozen') || storageString.includes('store frozen') || storageString.includes('freeze') || storageString.includes('at -20')) {
            storeFrozen = true;
            
        } else {
            storeFrozen = false;
        };

    if (storageString.includes('at 4') && (!storageString.includes('store primary sodium citrate refrigerated at 4'))) {
            storeFridge = true;
        } else {
            storeFridge = false;
        };

    if (storageString.includes('primary tube may be stored at 4')) {
        storeFridge = false;
    }
    if (storageString.includes('specimen at room temperature')) {
            storeRoomT = true;
        } else {
            storeRoomT = false;
        }
    



    if (centrifugeString.includes('do not seperate') 
        ||
        centrifugeString.includes('do not centrifuge')
        ||
        centrifugeString.includes('must not be centrifuged')
        || 
        centrifugeString.includes('do not spin')) {
            centrifugeNo = true;
     } else {
            centrifugeNo = false;
     }

     if (transportString.includes('wrap in foil')
     ) {
    wrapfoil = true;
} 



    

    return(
        <div className='helpful-button-container'>
        {storeFrozen ? <HelpfulButton title={"Store Frozen"} icon={"snowflake outline"} backgroundColor={"#b0e0e6"}/> : null}
        {storeFridge ? <HelpfulButton title={"Store at 4 degrees"} icon={"thermometer half icon"} backgroundColor={"#b4eeb4"}/> : null}
        {storeRoomT ? <HelpfulButton title={"Store at room temp"} icon={"sun"} backgroundColor={"#ffdab9"}/> : null}
        {centrifugeNo ? <HelpfulButton title={"Do not centrifuge"} icon={"stop circle outline"} backgroundColor={"#ff7373"}/> : null}
        {collectOnIce ? <HelpfulButton title={"Collect on ice"} icon={"cubes"} backgroundColor={"#c6e2ff"}/> : null}
        {aliquotFreeze ? <HelpfulButton title={"Aliquot and freeze"} icon={"snowflake"} backgroundColor={"#dc61bd"}/> : null}
        {wrapfoil ? <HelpfulButton title={"Wrap in aluminium foil"} icon={"shield alternate"} backgroundColor={"#dc61bd"}/> : null}
        </div>
    )


}


