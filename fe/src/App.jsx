import { useContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { animated, useSpring } from 'react-spring'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AppContext } from './contexts/app.context'
import Contact from './pages/Contact'
import HomePage from './pages/HomePage'
import Portfolio from './pages/Portfolio'
import PostDetail from './pages/PostDetail'
import PostsList from './pages/PostsList/Postlists'
import http from './utils/http'

function App() {
  const { setSetting } = useContext(AppContext)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const fetchData = async () => {
      const res = await http.get('setting?populate=*')
      setSetting(res.data.data.attributes)
    }
    fetchData()
  }, [])

  return (
    <div className='App'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/posts' element={<PostsList />} />
            <Route path='/posts/:id' element={<PostDetail />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/portfolio/:id' element={<Portfolio />} />
          </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
