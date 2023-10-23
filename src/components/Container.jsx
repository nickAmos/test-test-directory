
import '../styling/Container.css';
import { motion} from 'framer-motion';

export default function Container({src, collectionInstruct, container}) {

    
    return (
        <div className='image-container'>
            <div id='boxbox'>
                
                <h2>{container}</h2>
                {src ? <div id='imgimg'> <a target='_blank' rel='noreferrer' href='https://www.austinpathology.org.au/assets/documents/tube-guide-v2-final.pdf?20230526'> <motion.img src={src} alt="image Goes here"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                /> </a></div> : null }
                <div>
                
                <p>{collectionInstruct}</p>
                </div>
               
            </div>
        </div>
    )
}