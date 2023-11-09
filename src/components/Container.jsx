
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
        if (container.includes('Lithium Heparin')) {
            style = {
                backgroundColor: '#deffea'
            }
        }

        if (container.includes('ESR')) {
            style = {
                backgroundColor:'#EBE3D5'
            }
        }

        if (addCollectInstruct) {
            if (addCollectInstruct.includes('Lithium Heparin tube on ice is the preferred sample type.')) {
                style = {
                    backgroundColor: '#deffea'
                }
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

    if (addCollectInstruct) {
        if (addCollectInstruct.length > 200) {
            longInstructions = true;
        }
    }
    if (collectionInstruct) {
        if (collectionInstruct.length > 200) {
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
                {src ? <div id='imgimg' style={style}> <motion.img src={src} alt="image Goes here"
                /> </div> : null }
                <div id='instructions'>
                
                {longInstructions ?
                <div>
                <a id='departmentContent' onClick={() => window.scrollBy(0, 850)} class={'ui teal image label large'}>
                    See collection instructions 👇</a> </div>
                  : null }
                {!longInstructions && instructions ? <p>{instructions}</p> : null}
                
                </div>
               
            </div>
        </div>
    )
}
/*backgroundColor*/
