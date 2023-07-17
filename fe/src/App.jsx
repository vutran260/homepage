import { Link, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PostsList from './pages/PostsList/Postlists'
import PostDetail from './pages/PostDetail'
import HomePage from './pages/HomePage'
import { motion } from 'framer-motion'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import { AppContext } from './contexts/app.context'
import { useContext, useEffect } from 'react'
import http from './utils/http'

const AnimationWrap = ({ children }) => (
  // <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
    {children}
  // </motion.div>
)

function App() {
  const { setSetting } = useContext(AppContext)
  useEffect(() => {
    const fetchData = async () => {
      const res = await http.get('setting?populate=*')
      setSetting(res.data.data.attributes)
    }
    fetchData()
  }, [])
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/posts'
          element={
            // <AnimationWrap>
              <PostsList />
            // </AnimationWrap>
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
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
