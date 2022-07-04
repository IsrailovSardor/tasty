import {useEffect} from "react";
import {useAnimation, motion} from "framer-motion";
import {useInView} from "react-intersection-observer";

// const squareVariants = {
//     visible: { opacity: 1, scale: 1, x:0, transition: { duration: 1 } },
//     hidden: { opacity: 0, scale: 1, x: -100 }
// };

export default function CustomAnimation(Component, custom) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={custom}>
                <Component/>
        </motion.div>
    )
}