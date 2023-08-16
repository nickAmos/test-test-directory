import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";
import { motion } from "framer-motion";



export default function Reveal({ children, posX, posY, delay}) {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: false});
    const mainControl = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControl.start({opacity: 1, y: 0, x: 0})
        } else {
            mainControl.start({opacity: 0, y: posY, x: posX})
        }
    }, [isInView]);
  
    return (
      <div ref={ref} id="reveal-div">
        <motion.div id="reveal-div"
          initial= {{opacity:0, y: posY, x: posX}}
          animate= {mainControl}
          transition={{
            duration: 1, 
            ease: [0, 0.71, 0.2, 1.01],
            delay: delay
            }}
            
        >
          {children}
        </motion.div>
      </div>
    );
  }