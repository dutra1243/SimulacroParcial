import { useState } from 'react'

import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import HomeScreen from './Components/Home/HomeScreen'
import DetailScreen from './Components/Details/DetailScreen'
import AddSport from './Components/AddSport/AddSport'
import { SportsContext } from './Components/SportsContext'

function App() {

  const [sports, setSports] = useState()

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeScreen />
    },
    {
      path: '/games/:id',
      element: <DetailScreen />
    },
    {
      path: '/addSport',
      element: <AddSport />
    }
  ])

  return (
    <>
      <SportsContext.Provider value={[sports, setSports]}>
        <RouterProvider router={router} />
      </SportsContext.Provider>
    </>
  )
}

export default App
