import { useContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { animated, useSpring } from 'react-spring'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Typist from 'react-typist'
import { AppContext } from './contexts/app.context'
import Contact from './pages/Contact'
import HomePage from './pages/HomePage'
import Portfolio from './pages/Portfolio'
import PostDetail from './pages/PostDetail'
import PostsList from './pages/PostsList/Postlists'
import http from './utils/http'

const AnimationWrap = ({ children }) =>
  // <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
  ({ children })
  // </motion.div>

function App() {
  const { setSetting } = useContext(AppContext)
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 3000)
  // }, [])

  useEffect(() => {
    const fetchData = async () => {
      const res = await http.get('setting?populate=*')
      setSetting(res.data.data.attributes)
    }
    fetchData()
  }, [])

  const fadeAndScaleIn = useSpring({
    opacity: loading ? 0 : 1,
    // transform: loading ? 'scale(0.8)' : 'scale(1)'
  })

  return (
    <div className='App'>
      {/* {loading ? (
        <div className='loading-spinner justify-center text-center text-black'>
          <Typist avgTypingDelay={100} startDelay={0} className='text-4xl italic'>
            WELCOME...
          </Typist>
        </div>
      ) :  */}
      (
        {/* <animated.h1 style={fadeAndScaleIn}> */}
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/posts' element={<PostsList />} />
            <Route path='/posts/:id' element={<PostDetail />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/portfolio' element={<Portfolio />} />
          </Routes>
        {/* </animated.h1> */}
      )

      <ToastContainer />
    </div>
  )
}

export default App
