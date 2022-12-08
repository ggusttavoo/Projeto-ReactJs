import { createBrowserRouter } from "react-router-dom"

import Home from './pages/Home/Home'
import Login from './pages/Home/Login'
import Admin from './pages/Home/Admin'
import Error from './pages/Home/Error'
import Private from './routes/Private'
import Networks from './pages/Home/Networks'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/admin',
    element: <Private> <Admin/> </Private>
  },
  {
    path: '/admin/social',
    element: <Private> <Networks/> </Private>
  },
  {
    path:'*',
    element: <Error/>
  }
])

export { router };