import React from 'react'
import HomePages from './Pages/HomePages/HomePages'
import './App.css'
import {Route ,Routes} from "react-router-dom";
import Fillial from './Pages/Fillial/Fillial';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePages/>}/>
        <Route path="/fillial" element={<Fillial/>}/>
      </Routes>

    </div>
  )
}

export default App