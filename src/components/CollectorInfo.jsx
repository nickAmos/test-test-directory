import '../styling/CollectorInfo.css';

export default function CollectorInfo({collectionInstruct, addCollectInstruct, notes, minVol, minVolPaed, frequency}) {

    return (
        <>
            <div className='collector-container'>
                <div className='collector-header'>
                    <h2>Collector Infomation</h2>
                </div>
                <div className='collector-text-container'>
                            {collectionInstruct && addCollectInstruct ? <div><p id='info'><b>Instructions:</b> {collectionInstruct}. {addCollectInstruct}  </p></div> : null}
                            {collectionInstruct && !addCollectInstruct  ? <div><p id='info'><b>Instructions:</b> {collectionInstruct}</p></div> : null}
                            {!collectionInstruct && addCollectInstruct  ? <div><p id='info'><b>Instructions:</b> {addCollectInstruct} </p></div> : null}
                            {notes  ? <div><p id='info'><b>Notes: </b> {notes}</p></div> : null}
                            {minVol != 'None'  ? <div><p id='info'><b>Minimum Volume: </b> {minVol} </p></div> : null}
                            {minVolPaed != 'None'  ? <div><p id='info'><b>Minimum Volume Paediatric: </b> {minVolPaed}</p></div> : null}
                            {frequency ? <div><p id='info'><b>Frequency:</b> {frequency}</p></div> : null}
                </div>
            </div>
        </>
    
    )
}