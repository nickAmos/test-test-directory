
import '../styling/Container.css';
import { motion} from 'framer-motion';

export default function Container({src}) {

    
    return (
        <div  className='image-container'>
            <a target='_blank' rel='noreferrer' href='https://www.austinpathology.org.au/assets/documents/tube-guide-v2-final.pdf?20230526'>
                {src ? <motion.img src={src} alt="image Goes here"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            /> : <p>See collection instructions</p> }
            
            </a>
        </div>
    )
}