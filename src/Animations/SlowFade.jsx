import { motion } from 'framer-motion';
import React from 'react';


const SlowFade = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ 
        opacity: 1, 
        scale: 1 
      }}
      transition={{
        type: 'tween',
        duration: 2,
        ease: 'easeInOut',
        delay: delay,
        delayChildren: delay,
        staggerChildren: 0.3,
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default SlowFade;
