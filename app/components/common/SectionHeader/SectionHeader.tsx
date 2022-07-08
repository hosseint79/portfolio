
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface IProps {
    title:string;
    caption:string;
}


 const hOneVariants = {
        visible: { opacity: 1,y:0, transition: { duration: 0.4 } },
        hidden: { opacity: 0,y:20 }
};
 const spanVariants = {
        visible: { opacity: 1,y:0, transition: { duration: 1.5} },
        hidden: { opacity: 0,y:120 }
};


function SectionHeader({title,caption}:IProps) {

    const controls = useAnimation();
    const controls2 = useAnimation();

    const [ref, inView] = useInView();
    const [ref2, inView2] = useInView();
    useEffect(() => {
        if (inView) {
        controls.start("visible");
        }
        if (inView2) {
        controls2.start("visible");
        }
    }, [controls, inView,controls2, inView2]);

    return (  
         <div
        
            className="text-center pt-3 pb-6 text-white my-14"
        >
            <motion.h2 ref={ref} animate={controls}  initial="hidden" variants={hOneVariants}  className="my-3 text-3xl font-semibold">
                {title} 
            </motion.h2>
            <motion.span ref={ref2} animate={controls2}  initial="hidden" variants={spanVariants}  className="my-3 text-3xl font-semibold">
               {caption}
            </motion.span>
            
        </div>

    );
}

export  {SectionHeader};