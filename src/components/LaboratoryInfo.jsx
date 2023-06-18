export default function LaboratoryInfo({storage, addStorage, transport, addTransport, labNotes}) {

    return(
        <>
        <div className='laboratory-info'>
                    <button id='laboratory-header'>
                            <h2>Laboratory Infomation</h2>
                        </button>
                        <div id='laboratory-dropdown'>
                            { storage && addStorage ? <div><p><b>Storage:</b> {storage}. <br></br> {addStorage} </p></div> : null}
                            { storage && !addStorage ? <div><p><b>Storage: </b> {storage}</p></div> : null}
                            { !storage && addStorage ? <div><p><b>Storage: </b> {addStorage}</p></div> : null}
                            { transport && addTransport ? <div><p><b>Transport: </b> {transport}. {addTransport}</p></div> : null}
                            { transport && !addTransport ? <div><p><b>Transport:</b>{transport}</p></div> : null}
                            { !transport && addTransport ? <div><p><b>Transport:</b>{addTransport}</p></div> : null}
                            { labNotes ? <div><p><b>Notes:</b>{labNotes}</p></div> : null}
                        </div>
                    </div>
        </>
    )
}