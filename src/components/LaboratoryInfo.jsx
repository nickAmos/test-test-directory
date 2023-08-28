import '../styling/LaboratoryInfo.css';

export default function LaboratoryInfo({storage, addStorage, transport, addTransport, labNotes}) {

    
    if (storage || addStorage || transport || addTransport || labNotes) {
        
        return(
            <>
            <div className='laboratory-container'>
                        <div id='laboratory-header'>
                                <h2>Laboratory Infomation</h2>
                            </div>
                            <div className='laboratory-dropdown'>
                                { storage && addStorage ? <div><p id='info'><b>Storage:</b> {storage}. <br></br> {addStorage} </p></div> : null}
                                { storage && !addStorage ? <div><p id='info'><b>Storage: </b> {storage}</p></div> : null}
                                { !storage && addStorage ? <div><p id='info'> <b>Storage: </b> {addStorage}</p></div> : null}
                                { transport && addTransport ? <div><p id='info'><b>Transport: </b> {transport}. {addTransport}</p></div> : null}
                                { transport && !addTransport ? <div><p id='info'><b>Transport:</b>{transport}</p></div> : null}
                                { !transport && addTransport ? <div><p id='info'><b>Transport:</b>{addTransport}</p></div> : null}
                                { labNotes ? <div><p id='info'><b>Notes:</b>{labNotes}</p></div> : null}
                            </div>
                        </div>
            </>
        )
    }
    
   
}