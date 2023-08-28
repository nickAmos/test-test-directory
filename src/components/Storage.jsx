import '../styling/Testname.css';
import 'semantic-ui-css/semantic.min.css';
import {Button, Icon} from 'semantic-ui-react';


export default function Storage({storage, addStorage, transport, addTransport, labNotes, addCollectInstruct, collectionInstruct}) {

    let storageString = (`${storage} ${addStorage} ${transport} ${labNotes} ${addTransport}`).toLocaleLowerCase();




    if (collectionInstruct || addCollectInstruct) {
        let transportString = (`${addCollectInstruct} ${collectionInstruct}`).toLowerCase();
        if (transportString.includes('place tube on ice') 
            || 
            transportString.includes('collect on ice')
            ||
            transportString.includes('laboratory on ice')) {
            return (
                <div id='storage-logo'>
                        <Button id='collect-on-ice' animated='vertical'>
                            <Button.Content hidden>
                            <Icon link name='snowflake' id='snowflake' />
                            </Button.Content>        
                            <Button.Content visible id='store-text'>
                                Collect on ice
                            </Button.Content>
                        </Button>
                        </div>
            )
           }
    }

    if (storageString.includes('aliquot and freeze')) {
        return (
            <div id='storage-logo'>
                <Button id='frozen-aliquot' animated='vertical'>
                    <Button.Content hidden>
                    <Icon link name='tint' id='snowflake' />
                    </Button.Content>        
                
                    <Button.Content visible id='store-text'>
                        Aliquot and freeze
                    </Button.Content>
                </Button>
                </div>
        )
    }




        
        if (storageString.includes('store serum frozen') 
            || 
            storageString.includes('store frozen')
            || 
            storageString.includes('aliquot and freeze')) {
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

        if (storageString.includes('at 4')) {
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

        if (storageString.includes('specimen at room temperature')) {
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


 /* seperate each type of block into its own component so that multiple 
 buttons can be displayed for one test, additionally create a certrifuge / 
 No centrifuge button*/
