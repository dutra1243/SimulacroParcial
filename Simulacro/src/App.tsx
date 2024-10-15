import { useState, useEffect } from 'react'

import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import HomeScreen from './Components/Home/HomeScreen'
import DetailScreen from './Components/Details/DetailScreen'
import AddSport from './Components/AddSport/AddSport'
import { SportsContext } from './Components/SportsContext'

function App() {


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

  const [sports, setSports] = useState()

  useEffect(() => {
    fetch("http://localhost:3000/api/games", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    )
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setSports(data)
      })

  }, [])

  return (
    <>
      <SportsContext.Provider value={[sports, setSports]}>
        <RouterProvider router={router} />
      </SportsContext.Provider>
    </>
  )
}

export default App
