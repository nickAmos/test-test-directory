import '../styling/LaboratoryInfo.css';

export default function LaboratoryInfo({storage, addStorage, transport, addTransport, labNotes}) {

    
    if (storage || addStorage || transport || addTransport || labNotes) {

        let regionalTransport = false;
        let regionalStorage = false;
        let regionalNotes = false;

        if (addTransport) {
            if (addTransport.includes('Instructions for: M') || addTransport.includes('Instructions for: R')) {
                console.log('includes regional Transport')
                regionalTransport = true;
            }
        }

        if (addStorage) {
            if (addStorage.includes('Instructions for: M') || addStorage.includes('Instructions for: R')) {
                console.log('includes regional Transport')
                regionalStorage = true;
            }
        }

        if (labNotes) {
            if (labNotes.includes('Instructions for: M') || labNotes.includes('Instructions for: R')) {
                console.log('includes regional Notes')
                regionalNotes = true;
            }
        }


        
        
        return(
            <>
            <div className='laboratory-container'>
                        <div id='laboratory-header'>
                                <h2>Laboratory Infomation</h2>
                            </div>
                            <div className='laboratory-dropdown'>

                                { storage && addStorage && !regionalStorage ? <div><p id='info'><b>Storage:</b> {storage}. {addStorage} </p></div> : null}
                                { storage && !addStorage && !regionalStorage ? <div><p id='info'><b>Storage: </b> {storage}</p></div> : null}
                                { !storage && addStorage && !regionalStorage ? <div><p id='info'> <b>Storage: </b> {addStorage}</p></div> : null}

                                {regionalStorage ? <div><p id='info'><b>Storage:</b>{storage}. <br></br> <br></br> <p>{addStorage}</p></p></div> : null}

                                { transport && addTransport && !regionalTransport ? <div><p id='info'><b>Transport: </b> {transport}. {addTransport}</p></div> : null}
                                { transport && !addTransport && !regionalTransport ? <div><p id='info'><b>Transport:</b>{transport}</p></div> : null}
                                { !transport && addTransport && !regionalTransport ? <div><p id='info'><b>Transport:</b>{addTransport}</p></div> : null}

                                {regionalTransport ? <div><p id='info'><b>Transport:</b>{transport}<br></br> <br></br> <p>{addTransport}</p></p> </div> : null}

                                { labNotes && !regionalNotes ? <div><p id='info'><b>Notes:</b>{labNotes}</p></div> : null}

                                {regionalNotes ? <div><p id='info'>{labNotes}</p></div> : null}
                            </div>
                        </div>
            </>
        )
    }
    
   
}