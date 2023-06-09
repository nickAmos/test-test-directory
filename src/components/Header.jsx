import '../styling/Header.css';
import { GrTestDesktop } from 'react-icons/gr';


export default function Header() {


    return(
        <header>
            <div id='left-box'>
                <h1>Pathology assistant</h1>
            </div>

            <div id='right-box'>
            <a target='_blank' rel='noreferrer' href='https://www.austinpathology.org.au/test-directory'>
        <GrTestDesktop  size={50}/>
        </a>
      
            </div>
        </header>
    )
}

