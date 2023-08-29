import 'semantic-ui-css/semantic.min.css';
import {Button, Icon} from 'semantic-ui-react';
import '../styling/HelpfulButton.css';


export default function HelpfulButton({title, icon, backgroundColor}) {

    return (
        <div id='storage-logo'>
                <Button id='helpfulButton' animated='vertical'
                style={{backgroundColor: backgroundColor}}>
                    <Button.Content hidden>
                    <Icon link name={icon} id='snowflake' />
                    </Button.Content>        
                
                    <Button.Content visible id='store-text'>
                        {title}
                    </Button.Content>
                </Button>
         </div>
    )
}
