import '../styling/Header.css';
import { GrTestDesktop } from 'react-icons/gr';
import 'semantic-ui-css/semantic.min.css';
import {Button, Icon, Reveal} from 'semantic-ui-react';


export default function Header() {


    return(
        <header id='main-header'>
            <div id='left-box'>
                <Reveal animated='move'>
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
            </div>

            <div id='middle-box'>
                <h1>Nick & Ryan Test Directory</h1>
            </div>

            <div id='right-box'>
            <a target='_blank' rel='noreferrer' href='https://www.austinpathology.org.au/assets/documents/tube-guide-v2-final.pdf?20230526'>
            <Button animated='vertical'>
                <Button.Content hidden>
                  <Icon link name='file' />
                </Button.Content>        

                <Button.Content visible>
                    Order of Draw
                </Button.Content>
            </Button>
            </a>
      
            </div>
        </header>
    )
}

