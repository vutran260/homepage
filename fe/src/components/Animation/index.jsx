import { motion } from 'framer-motion'

export const AnimationWrap = ({ children }) => (
  <motion.div style={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1 }}>
    {children}
  </motion.div>
)
