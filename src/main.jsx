import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,createBrowserRouter,Route,Router,RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Landing from './components/Landing.jsx'
import Login from './components/Login.jsx'
import Welcome from './components/Welcome.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {path:"/",
        element:<Landing/>

      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/loginn",
        element:<Welcome/>
      }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
   
  </StrictMode>,
)
