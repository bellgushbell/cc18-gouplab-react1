import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { toppings } from './data.js'
import SelectToppings from './check.jsx'


function App() {



  return (
    <div className='flex justify-center align-middle bg-red-300 w-2/4 mx-auto mt-8 rounded-3xl '>

      <SelectToppings />
    </div>
  )
}

export default App
