import React from "react";
import { motion } from "framer-motion";

export default function Animation({ children, ...props }) {
   return (
      <motion.div
         {...props}
         initial={{ y: 50, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         transition={{ delay: 0.5, duration: 0.5 }}>
         {children}
      </motion.div>
   );
};
