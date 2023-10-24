
import '../styling/Container.css';
import { motion} from 'framer-motion';

export default function Container({src, collectionInstruct, container, addCollectInstruct}) {

    let instructions = false;
    let longInstructions = false;

    let style = {
        backgroundColor: 'white'
    }

    if (container) {
        if (container === 'EDTA (purple)') {
            style = {
                backgroundColor: '#ece6ff'
            }
        }
        if (container === 'Serum tube (gold cap OR red cap w. yellow insert)') {
            style = {
                backgroundColor: '#ffd4ad'
            }
        }
        if (container === 'Sodium Citrate (Blue top)') {
            style = {
                backgroundColor: '#e5f7ff'
            }
        }
        if (container.includes('Lithium Heparin - No Gel (green)')) {
            style = {
                backgroundColor: '#deffea'
            }
        }
        if (container === 'Trace Metal Tube (Navy top)') {
            style = {
                backgroundColor: '#bbf8ff'
            }
        }
        if (container === '9ml EDTA (purple)') {
            style = {
                backgroundColor: '#eecbff'
            }
        }
        if (container.includes('Fluoride')) {
            style = {
                backgroundColor: '#b5c1b4'
            }
        }
        if (container.includes('24')) {
            style = {
                backgroundColor: 'white'
            }
        }
        if (container.includes('Sterile Container')) {
            style = {
                backgroundColor: '#fff1cd'
            }
        }
        if (container.includes('Faecal Pot')) {
            style = {
                backgroundColor: '#f9ebbe'
            }
        }
    }


    if (addCollectInstruct && collectionInstruct) {
        if (addCollectInstruct.length + collectionInstruct.length > 200) {
            longInstructions = true;
        } 
    }

    if (addCollectInstruct || collectionInstruct) {
        if (addCollectInstruct && collectionInstruct) {
            instructions = `${collectionInstruct}. ${addCollectInstruct}`
        } else if (addCollectInstruct && !collectionInstruct) {
            instructions = `${addCollectInstruct}`;
        } else if (!addCollectInstruct && collectionInstruct) {
            instructions = `${collectionInstruct}`;
        } 
    }

    
    return (
        <div className='image-container'>
            <div id='boxbox'>
                
                <h2>{container}</h2>
                {src ? <div id='imgimg' style={style}> <a target='_blank' rel='noreferrer' href='https://www.austinpathology.org.au/assets/documents/tube-guide-v2-final.pdf?20230526'> <motion.img src={src} alt="image Goes here"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                /> </a></div> : null }
                <div id='instructions'>
                
                {longInstructions ? <p>See collector Infomation</p> : null }
                {!longInstructions && instructions ? <p>{instructions}</p> : null}
                
                </div>
               
            </div>
        </div>
    )
}
/*backgroundColor*/
