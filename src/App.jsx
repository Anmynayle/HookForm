import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import useFetch from './Hooks/useFetch'

function App() {
  
 const url = `https://cars-crud.herokuapp.com/cars/`
  
  const data = useFetch(url)

  console.log(data)


  return (
    <div className = "App">
     <h1>
      CRUD
    </h1>
    </div>
  )
}

export default App
