import { motion } from 'framer-motion';
import React from 'react';

const FadeUp = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0, scale: 0.9 }}
      whileInView={{ 
        y: [40, -10, 0], 
        opacity: 1, 
        scale: 1 
      }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 2, 
        delay: delay,
        delayChildren: 0.5,
        staggerChildren: 0.3,
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
