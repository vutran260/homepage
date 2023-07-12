import { motion } from 'framer-motion'

export const AnimationWrap = ({ children }) => (
  <motion.div style={{ x: 100 }} animate={{ x: 0 }} transition={{ duration: 2 }}>
    {children}
  </motion.div>
)
