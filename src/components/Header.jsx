import '../styling/Header.css';

import 'semantic-ui-css/semantic.min.css';
import {Button, Icon, Reveal} from 'semantic-ui-react';



export default function Header() {


    return(
    
        <header id='main-header'>
            <div id='left-box'>
                <a target='_blank' rel='noreferrer' href='https://www.austinpathology.org.au/department-directory'>
                <Reveal animated='move up'>
                    <Reveal.Content visible>
                        <div id='contact-path'>
                        <span><Icon link name='phone square' id='phone-icon'/></span>
                        Contact Pathology
                        </div>
                    </Reveal.Content>
                    <Reveal.Content hidden>
                        <div id='contact-path'>
                        9496 3100
                        </div>
                        
                    </Reveal.Content>
                </Reveal>
                </a>
            </div>

            <div id='middle-box'>
                <h1>Nick & Ryan Test Directory</h1>
            </div>

            <div id='right-box'>
            <a target='_blank' rel='noreferrer' href='https://www.austinpathology.org.au/test-directory'>
                <Reveal animated='move up'>
                    <Reveal.Content visible>
                        <div id='contact-path'>
                   
                        Old Test Directory
                        </div>
                    </Reveal.Content>
                    <Reveal.Content hidden>
                        <div id='contact-path'>
                            <Icon link name='share square outline' id='phone-icon'/>
                        </div>
                        
                    </Reveal.Content>
                </Reveal>
                </a>
      
            </div>
        </header>
       
    )
}



/*  (Old) austin test directory button
<a target='_blank' rel='noreferrer' href='https://www.austinpathology.org.au/test-directory'>
            <Button animated='vertical' id='vert-button'>
                <Button.Content hidden>
                  <Icon link name='sign-in alternate' />
                </Button.Content>        

                <Button.Content visible>
                    Old Test Directory
                </Button.Content>
            </Button>
            </a> */