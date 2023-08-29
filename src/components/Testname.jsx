import '../styling/Testname.css';
import Storage from './Storage';
import 'semantic-ui-css/semantic.min.css';



export default function Testname({testName, storage, addStorage, transport, addTransport, labNotes, laboratory, collectionInstruct, addCollectInstruct}) {

   

    //set state of button text and image based on if 
    //'freeze'/ 'frozen' is container in tesstring.
    

    return(
        <>
        <div className='testName-container'>
            <h1 id='testName'>{testName}</h1>   
            <Storage 
                storage={storage} 
                addStorage={addStorage} 
                transport={transport} 
                addTransport={addTransport} 
                labNotes={labNotes} 
                laboratory={laboratory}
                collectionInstruct={collectionInstruct}
                addCollectInstruct={addCollectInstruct}
                testName={testName}/>
            </div> 
        
        </>
    )
}


//"Storage Instructions": "Store frozen at -20\u00b0C",