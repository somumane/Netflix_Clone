import React from 'react'
import ReactDOM from 'react-dom/client'
import './Style/App.css'
import './Style/index.css'
import { createBrowserRouter ,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import Home from './Components/Home.jsx'
import Login from './Components/Login'
const router=createBrowserRouter(
   createRoutesFromElements(
      <Route>
      <Route path='/' element={<Login/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='*' />
      </Route>
   )
)

ReactDOM.createRoot(document.getElementById('root')).render(
   <div  className='app'>
  <RouterProvider router={router}></RouterProvider>
</div>
  
    )
