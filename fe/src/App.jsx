import { Link, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PostsList from './pages/PostsList/Postlists'
import PostDetail from './pages/PostDetail'
import HomePage from './pages/HomePage'
import { motion } from 'framer-motion'
import Contact from './pages/Contact'
import TestScroll from './pages/TestScroll'

const AnimationWrap = ({ children }) => (
  <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
    {children}
  </motion.div>
)

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/posts'
          element={
            <AnimationWrap>
              <PostsList />
            </AnimationWrap>
          }
        />
        <Route
          path='/posts/:id'
          element={
            <AnimationWrap>
              <PostDetail />
            </AnimationWrap>
          }
        />
        <Route path='/' element={<>Home</>} />
        <Route path='/posts' element={<PostsList />} />
        <Route path='/posts/:id' element={<PostDetail />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/test' element={<TestScroll />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
