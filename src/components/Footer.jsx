
import '../styling/Footer.css';
import 'semantic-ui-css/semantic.min.css';
import '../styling/Header.css';
import {Button, Icon} from 'semantic-ui-react';



export default function Footer() {

    return(
        <div className="footer-flex">
            <div className="flex-child">
                <a target='_blank' rel='noreferrer' href=''>
                <Button animated='vertical' id='vert-button'>
                    <Button.Content hidden >
                    <Icon link name='sign-in alternate'/>
                    </Button.Content>        

                    <Button.Content visible>
                        Cerner Order FAQ
                    </Button.Content>
                </Button>
                </a>

        </div>
        <div className="flex-child">

                <a target='_blank' rel='noreferrer' href='https://austin.vicpath.auslab.com.au/'>
                    <Button animated='vertical' id='vert-button'>
                        <Button.Content hidden >
                        <Icon link name='sign-in alternate'/>
                        </Button.Content>        

                        <Button.Content visible>
                            Auscare
                        </Button.Content>
                    </Button>
                </a>

        </div>
        <div className="flex-child">
                <a target='_blank' rel='noreferrer' href='https://www.austinpathology.org.au/collection-centres.php'>
                    <Button animated='vertical' id='vert-button'>
                        <Button.Content hidden >
                        <Icon link name='sign-in alternate'/>
                        </Button.Content>        

                        <Button.Content visible>
                            Collection Centers
                        </Button.Content>
                    </Button>
                </a>    

        </div>
    </div>
    )
    
}


               
