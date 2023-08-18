import '../styling/Testname.css';
import 'semantic-ui-css/semantic.min.css';
import {Button, Icon} from 'semantic-ui-react';

export default function Storage({storage, addStorage, transport, addTransport, labNotes, laboratory}) {

    let frozenString = `${storage} ${addStorage} ${transport} ${labNotes} ${addTransport}`

  
    
    if (laboratory === 'Referred Test') {
        frozenString = frozenString.toLowerCase();
        if (frozenString.includes('frozen') || frozenString.includes('freeze')) {
            console.log('yes');
            return (
                <div id='storage-logo'>
                <Button id='storage-button-freeze' animated='vertical'>
                    <Button.Content hidden>
                    <Icon link name='snowflake' id='snowflake' />
                    </Button.Content>        
                
                    <Button.Content visible id='store-text'>
                        Store Frozen (-20°C)
                    </Button.Content>
                </Button>
                </div>
                )
            
        }

        if (frozenString.includes('at 4')) {
            return (
                <div id='storage-logo'>
                <Button id='storage-button-cold' animated='vertical'>
                    <Button.Content hidden>
                    <Icon link name='thermometer quarter' id='snowflake' />
                    </Button.Content>        
                
                    <Button.Content visible id='store-text'>
                        Store at 4°C
                    </Button.Content>
                </Button>
                </div>
            )
        }

        if (frozenString.includes('specimen at room temperature')) {
            return (
                <div id='storage-logo'>
                <Button id='storage-button-warm' animated='vertical'>
                    <Button.Content hidden>
                    <Icon link name='sun' id='snowflake' />
                    </Button.Content>        
                
                    <Button.Content visible id='store-text'>
                        Store at room temperature
                    </Button.Content>
                </Button>
                </div>
            )
        }
    }

   
 }

