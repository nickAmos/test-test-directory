import '../styling/Testname.css';

import 'semantic-ui-css/semantic.min.css';
import {Button, Icon} from 'semantic-ui-react';


export default function Testname({testName, storage, addStorage, transport, addTransport, labNotes}) {

    let testString = `${storage} ${addStorage} ${transport} ${labNotes}`

    //set state of button text and image based on if 
    //'freeze'/ 'frozen' is container in tesstring.
    

    return(
        <>
        <div className='testName-container'>
            <h1 id='testName'>{testName}</h1>   
            <div id='storage-logo'>
                <Button id='storage-button' animated='vertical'>
                    <Button.Content hidden>
                    <Icon link name='snowflake' id='snowflake' />
                    </Button.Content>        

                    <Button.Content visible>
                        Store Frozen (-20)
                    </Button.Content>
                </Button>
            </div> 
        </div>
        </>
    )
}


//"Storage Instructions": "Store frozen at -20\u00b0C",